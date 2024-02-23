import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getTemperaments } from '../../redux/actions';
import styles from './Filters.module.css';

const Filters = ({handleFilterByOrigin, handleFilterByTemperaments, temperamentsGetted, handleOrderByName, handleOrderByWeight}) => {

    return (
        <div className='filtersContainer'>
            <select name="DB_API" id="" onChange={handleFilterByOrigin} defaultValue=''>                
                <option className='option' value='All Origins'>All Origins</option>
                <option className='option' value='DataBase'> Data Base</option>
                <option className='option' value='API'>API</option>
            </select>

            <select name='temperaments' id='temperamentSelecter' onChange={handleFilterByTemperaments} defaultValue=''>
                <option className='option' value=''>Select a temperament</option>
                {temperamentsGetted.map((temperament) =>(
                    <option className='option' key={temperament.id} value={temperament.name}>{temperament.name}</option>
                ))}
            </select>

            <select name='Alphabetical Order' onChange={handleOrderByName}>
                <option className='option' value='A-Z'>A-Z</option>
                <option className='option' value='Z-A'>Z-A</option>
            </select>

            <select name='Weight' onChange={handleOrderByWeight}>
                <option className='option' value='Heavy'>Heavy</option>
                <option className='option' value='Light'>Light</option>
            </select>

        </div>
    )
}

export default Filters;