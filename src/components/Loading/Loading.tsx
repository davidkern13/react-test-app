import style from './style.module.css';

export const Loading = () => {
    return (
        <div className={style.loadingContainer}>
            <div className={style['item-1']}></div>
            <div className={style['item-2']}></div>
            <div className={style['item-3']}></div>
        </div>
    );
}