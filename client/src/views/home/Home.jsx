import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getAllDogs } from '../../redux/actions';
import NavBar from '../../components/navbar/NavBar';
import SearchBar from '../../components/searchbar/SearchBar';
import Cards from '../../components/cards/Cards';
import styles from './Home.module.css'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDogs());
    }, [dispatch])

    const dogs = useSelector(state => state.dogsGetted)    

    return (
        <div>
            <div>
                <NavBar/>
                <hr />
                <SearchBar/>
                <hr />
            </div>
            <div className={styles.cardsContainer}>
                <Cards dogs={ dogs }/>
            </div>
        </div>
    )

}

export default Home;