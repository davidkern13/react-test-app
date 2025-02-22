import { Drink } from "@/types";
import { Link } from "react-router-dom";
import { Image } from "@/common";

import style from './style.module.css';
import { useItemStore } from "@/store";

interface Props {
    data: Drink[];
}

export const ItemsListComponent = (props: Props) => {

    const { data } = props;

    const setItem = useItemStore((state) => state.setItem);

    const handleClickItem = (object: Drink) => {
        setItem(object);
    }

    if (!data) return;

    return (
        <ul className={style.itemListContainer}>
            {data?.map((item: Drink, idx: number) => {
                return (
                    <li onClick={() => handleClickItem(item)} key={item?.idDrink + idx} className={style.itemList}>
                        <Link to={`/item/${item?.idDrink}`}>
                            <figure>
                                <Image item={item || []} />
                                <figcaption>
                                    <h3>{item?.strDrink}</h3>
                                    <p>{item?.strCategory}</p>
                                </figcaption>
                            </figure>

                        </Link>

                    </li>
                )
            })}
        </ul>
    );
}

