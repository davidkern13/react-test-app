import { useRef, ChangeEvent } from 'react';

import { SearchComponent } from '@/components';
import { isValidToSearch } from '@/utils';

import { eventEmitter } from '@/utils';

const SearchContainer = () => {

    const inputSearchRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;

        if (!inputSearchRef.current || isValidToSearch(value)) return;

        inputSearchRef.current.value = value;

        eventEmitter.emit('searchValueChange', value);
    }

    return <SearchComponent handleInputChange={handleInputChange} inputSearchRef={inputSearchRef} placeholder={'🔍 Search for cocktail ...'} />;
}

export default SearchContainer;
