import { Drink } from '@/types';
import { getImageSrcSet, getImageSizes } from './actions';

interface Props {
    item: Drink;
}

export const Image = (props: Props) => {

    const { item } = props;

    if (!item) return;

    return (
        <>
            <img
                src={item?.strDrinkThumb + '/medium'}
                srcSet={getImageSrcSet(item?.strDrinkThumb || '')}
                sizes={getImageSizes()}
                alt={item?.strDrink}
            />
        </>
    );
}