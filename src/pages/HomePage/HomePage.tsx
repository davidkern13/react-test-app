import { Loading } from '@/components';
import { lazy, Suspense } from 'react';

const SearchContainer = lazy(() => import('@/containers/SearchContainer'));
const ItemsListContainer = lazy(() => import('@/containers/ItemsListContainer'));

import styles from './styles.module.css';

export const HomePage = () => {
    return (
        <div className={styles.homePageContainer}>
            <Suspense fallback={<Loading />}>
                <SearchContainer />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <ItemsListContainer />
            </Suspense>
        </div>
    );
}