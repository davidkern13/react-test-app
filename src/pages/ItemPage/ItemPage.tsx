import { Loading } from '@/components';
import { lazy, Suspense } from 'react';
const ItemContainer = lazy(() => import('@/containers/ItemContainer'));

export const ItemPage = () => {

    return (
        <Suspense fallback={<Loading />}>
            <ItemContainer />
        </Suspense>
    );
}