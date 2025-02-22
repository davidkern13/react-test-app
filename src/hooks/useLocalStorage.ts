import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initValue: T) {
    const [state, setState] = useState<T>(() => {
        try {
            const value = localStorage.getItem(key);
            if (value !== null) return JSON.parse(value) as T;

            localStorage.setItem(key, JSON.stringify(initValue));
            window.dispatchEvent(new Event("storage"));
            return initValue;
        } catch (error) {
            console.error(`Error accessing localStorage key "${key}":`, error);
            return initValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
            window.dispatchEvent(new Event("storage"));
        } catch (error) {
            console.error(`Error saving to localStorage key "${key}":`, error);
        }
    }, [key, state]);


    useEffect(() => {
        const listenStorageChange = () => {
            try {
                const value = localStorage.getItem(key);
                if (value !== null) {
                    setState(JSON.parse(value) as T);
                } else {
                    localStorage.setItem(key, JSON.stringify(initValue));
                    window.dispatchEvent(new Event("storage"));
                    setState(initValue);
                }
            } catch (error) {
                console.error(`Error syncing localStorage key "${key}":`, error);
            }
        };

        window.addEventListener("storage", listenStorageChange);
        return () => window.removeEventListener("storage", listenStorageChange);
    }, [key, initValue]);

    return [state, setState] as const;
}
