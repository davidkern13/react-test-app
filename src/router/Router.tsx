import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, ItemPage, AddItemPage } from '@/pages';
import { Navigation } from '@/components';

export const Router = () => {

    return (
        <BrowserRouter>

            <Navigation />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/item/:id' element={<ItemPage />} />
                <Route path='/add' element={<AddItemPage />} />
            </Routes>
        </BrowserRouter>
    )
}
