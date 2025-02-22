import { Image } from "@/common";
import { Drink } from "@/types";
import { Error } from "@/components";

import styles from './style.module.css';

interface Props {
    item: Drink | null;
}

export const ItemComponent = (props: Props) => {

    const { item } = props;

    if (!item) return <Error />;

    return (
        <div className={styles.itemContainer}>
            <figure>
                <Image item={item || []} />
                <figcaption>
                    <h3>{item?.strDrink}</h3>
                    <p>{item?.strCategory}</p>

                    <span className={styles.strInstructions}>
                        <p>{item?.strInstructions}</p>
                    </span>
                </figcaption>
            </figure>

        </div>
    );
}