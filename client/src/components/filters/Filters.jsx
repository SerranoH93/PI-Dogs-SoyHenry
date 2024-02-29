import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getTemperaments } from '../../redux/actions';
import styles from './Filters.module.css';
import { 
    setOrigin, setTemperament, setName, setWeight, applyFilters
} from '../../redux/actions';

const Filters = ({changeFilters, handleFilterByOrigin, handleFilterByTemperaments, temperamentsGetted, handleOrderByName, handleOrderByWeight}) => {

    const dispatch = useDispatch();
    const origin = useSelector(state => state.filters.origin);
    const temperament = useSelector(state => state.filters.temperament);
    const name = useSelector(state => state.filters.name);
    const weight = useSelector(state => state.filters.weight);
  
    const handleOriginChange = (e) => {
        dispatch(setOrigin(e.target.value))
        dispatch(applyFilters())
    }

    const handleTemperamentChange = (e) => {
        dispatch(setTemperament(e.target.value))
        dispatch(applyFilters())
    }

    const handleNameChange = (e) => {
        dispatch(setName(e.target.value))
        dispatch(applyFilters())
    }

    const handleWeightChange = (e) => {
        dispatch(setWeight(e.target.value))
        dispatch(applyFilters())
    }

    return (
        <div className={styles.filtersContainer}>
            <div className={styles.filtersByOrigin}>
                <p>Filter by origin:</p>
                <select name="DB_API" id="" value={origin} onChange={handleOriginChange}>       
                    <option className='option' value='All Origins'>All Origins</option>
                    <option className='option' value='DataBase'> Data Base</option>
                    <option className='option' value='API'>API</option>
                </select>
            </div>
            
            <div className={styles.filtersByTemperament}>
                <p>Filter by temperament:</p>
                <select name='temperaments' id='temperamentSelecter' value={temperament} onChange={handleTemperamentChange}>
                    <option className='option' value=''>Select a temperament</option>
                    {temperamentsGetted.map((temperament) => (
                        <option className='option' key={temperament.id} value={temperament.name}>{temperament.name}</option>
                    ))}
                </select>
            </div>
            <div className={styles.alphabeticalOrder}>
                <p>Alphabetical Order:</p>
                <select name='Alphabetical Order' value={name} onChange={handleNameChange}>
                    <option className='option' value='A-Z'>A to Z</option>
                    <option className='option' value='Z-A'>Z to A</option>
                </select>
            </div>

            <div className={styles.orderByWeight}>
                <p>Order by Weight:</p>
                <select name='Weight' value={weight} onChange={handleWeightChange}>
                    <option className='option' value='Heavy'>Heavy</option>
                    <option className='option' value='Light'>Light</option>
                </select>
            </div>




        </div>
    )
}

export default Filters;