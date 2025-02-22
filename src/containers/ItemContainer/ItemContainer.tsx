import { useParams } from "react-router-dom";

import { Error, ItemComponent, Loading } from "@/components";
import { useItemStore } from "@/store";
import { useCallback, useEffect } from "react";

import API_CONFIG from '@/config/config.json';

const ItemContainer = () => {

    const { id } = useParams();

    const { item, loading, error, fetchData } = useItemStore();

    const handleGetItem = useCallback(() => {
        if (!id) return;

        const url = `${API_CONFIG.endpoints.getById + id}`;
        fetchData(url);

    }, [id, fetchData]);


    useEffect(() => {
        if (!item) handleGetItem();
    }, [handleGetItem]);

    if (!id || error) return <Error />;
    if (loading) return <Loading />;

    return <ItemComponent item={item} />;
}

export default ItemContainer;