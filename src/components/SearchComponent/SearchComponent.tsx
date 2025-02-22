import { ChangeEvent } from 'react';

import style from './styles.module.css';

interface Props {
    inputSearchRef: any;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

export const SearchComponent = (props: Props) => {

    const { inputSearchRef, handleInputChange, placeholder } = props;

    return (
        <div className={style.SearchContainer}>
            <input ref={inputSearchRef} onChange={handleInputChange} type="text" placeholder={placeholder} />
        </div>
    );
}


