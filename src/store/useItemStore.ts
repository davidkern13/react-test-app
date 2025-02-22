import { useAxios } from '@/hooks';
import { Drink } from '@/types';
import { create } from 'zustand';

interface DataStoreState<T> {
    item: Drink | null;
    loading: boolean;
    error: string | null;
    setItem: (newItem: T) => void;
    fetchData: (url: string) => Promise<void>;  // Add fetchData here
}

interface ApiResponse {
    drinks: Drink[];
}

const createItemStore = <T extends Drink | null = Drink>() =>
    create<DataStoreState<T>>((set) => ({
        item: null,
        loading: false,
        error: null,

        setItem: (newItem: T) => {
            set({ item: newItem })
            sessionStorage.setItem('item-storage', JSON.stringify(newItem));
        },
        fetchData: async (url: string) => {
            set({ loading: true, error: null });

            const storedItem = sessionStorage.getItem('item-storage');

            if (storedItem) {
                const parsedItem: Drink | null = JSON.parse(storedItem);
                set({ item: parsedItem, loading: false });
                return;
            }

            try {
                const response = await useAxios<ApiResponse>(url);
                const itemData: Drink | null = response?.drinks?.[0] || null;
                set({ item: itemData, loading: false });
                sessionStorage.setItem('item-storage', JSON.stringify(itemData));
            } catch (error: unknown) {
                set({ item: null, error: (error as Error).message, loading: false });
            }
        },
    }));

export const useItemStore = createItemStore<any>();
