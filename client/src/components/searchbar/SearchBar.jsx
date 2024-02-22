import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({handleInput, handleButton, input}) => {
    return (
        <div>
            <input 
                type='text'
                name='search'
                id='search'
                onChange={handleInput}
                value={input}
                placeholder='Enter a breed to search'/>
            <button onClick={handleButton}>Search</button>
        </div>        
    )    
}

export default SearchBar;