import { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { Loading, Error, ItemsListComponent, PaginationComponent } from '@/components';

import { eventEmitter, isValidInput } from '@/utils';
import { usePostStore } from '@/store';

import API_CONFIG from '@/config/config.json';

const DEFAULT_ITEM_PEER_PAGE = 9;

const ItemsListContainer = () => {

    const [page, setPage] = useState(1);

    const { data = [], loading, error, fetchData } = usePostStore();

    const prevValueRef = useRef<string>(null);

    const { visible, hide, visibleItems } = useMemo(() => {
        const start = (page - 1) * DEFAULT_ITEM_PEER_PAGE;
        const end = start + DEFAULT_ITEM_PEER_PAGE;
        const visibleItems = data?.drinks?.slice(start, end);

        const visible = start === 1;
        const hide = end >= data?.length;

        return { visible, hide, visibleItems };
    }, [page, data]);

    const handleValueChange = useCallback((e: string) => {
        if (prevValueRef.current === e || !e) return;

        if (isValidInput(e)) fetchData(API_CONFIG.endpoints.autoComplete + e);
        prevValueRef.current = e;
    }, []);

    const handlePrevCount = () => {
        setPage(page - 1);
    }

    const handleNextCount = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        eventEmitter.on('searchValueChange', handleValueChange);

        return () => {
            eventEmitter.off('searchValueChange', handleValueChange);
        }
    }, [handleValueChange]);

    if (loading) return <Loading />;
    if (error) return <Error />;

    return (
        <>
            {
                visibleItems
                    ?
                    <>
                        <ItemsListComponent data={visibleItems || []} />
                        <PaginationComponent handlePrevCount={handlePrevCount} handleNextCount={handleNextCount} visible={visible} hide={hide} page={page} />
                    </>
                    :
                    null
            }

        </>
    )

}

export default ItemsListContainer;