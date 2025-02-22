import { useState, useRef } from 'react';
import { useItemStore } from '@/store';
import { useForm } from 'react-hook-form';

import styles from './style.module.css';
import { Link } from 'react-router-dom';

export const AddItemPage = () => {

    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const idRef = useRef<string>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const setItem = useItemStore((state) => state.setItem);

    if (isSubmit) {
        return (
            <div className={styles.formContainer}>
                <p>Data submitted check your mail</p>
                <Link to={'/'}>Home page</Link>
                <Link to={`/item/${idRef.current}`}>Check item</Link>
            </div>
        )
    }

    return (
        <div className={styles.formContainer}>

            <h1>Add new item</h1>

            <form onSubmit={handleSubmit((data) => {
                //TODO: sanitize for xss scripts
                setItem(data);

                idRef.current = data?.idDrink;
                setIsSubmit(true);
            })}>

                <input className={styles.formItem} type="text" {...register("strDrink", { required: true })} placeholder="Name" />
                {errors.strDrink && <span>This field is required</span>}

                <input className={styles.formItem} type="text" {...register("idDrink", { required: true })} placeholder="id" />
                {errors.idDrink && <span>This field is required</span>}

                <input className={styles.formItem} type="text" {...register("strCategory", { required: true })} placeholder="Category" />
                {errors.strCategory && <span>This field is required</span>}

                <input className={styles.formItem} type="text" {...register("strInstructions", { required: true })} placeholder="Instructions" />
                {errors.strInstructions && <span>This field is required</span>}

                <input className={styles.formItem} type="text" {...register("strDrinkThumb", { required: true })} placeholder={'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg'} />
                {errors.strDrinkThumb && <span>This field is required https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg</span>}

                <input type="submit" />
            </form>
        </div>
    );
}