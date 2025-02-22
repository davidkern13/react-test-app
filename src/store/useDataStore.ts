import { useAxios } from '@/hooks';
import { create } from 'zustand';

interface DataStoreState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    fetchData: (url: string) => Promise<void>;
}

const createDataStore = <T = any>() =>
    create<DataStoreState<T>>((set) => ({
        data: null,
        loading: false,
        error: null,

        fetchData: async (url: string) => {
            set({ loading: true, error: null });
            try {
                const response = await useAxios<T>(url);
                set({ data: response, loading: false });
            } catch (error: unknown) {
                set({ data: null, error: (error as Error).message, loading: false });
            }
        },
    }));

export const usePostStore = createDataStore<any>();

