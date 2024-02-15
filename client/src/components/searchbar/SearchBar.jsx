import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div>
            <input 
                type='text'
                name='search'
                id='search'
                placeholder='Enter a breed to search'/>
            <button>Search</button>
        </div>


    )
}


export default SearchBar;