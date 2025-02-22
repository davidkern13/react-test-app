import axios, { AxiosResponse } from 'axios';

export const useAxios = async <T>(url: string) => {
    try {
        const response: AxiosResponse<T> = await axios.get(url);
        return response.data;
    } catch (error: unknown) {
        return null;
    }
}