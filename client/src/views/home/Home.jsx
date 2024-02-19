import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getAllDogs } from '../../redux/actions';
import Cards from '../../components/cards/Cards';
import Pagination from '../../components/pagination/Pagination';
import NavBar from '../../components/navbar/NavBar';
import SearchBar from '../../components/searchbar/SearchBar';
import styles from './Home.module.css'

const Home = () => {
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogsGetted);        

    useEffect(() => {
        console.log('useEffect')
        dispatch(getAllDogs());
    }, [dispatch])

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(9);
    const starIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    const dogsToShow = dogs.slice(starIndex, endIndex); 

    

    return (
        <div>
            <div>
                <NavBar/>
                <hr />
                <SearchBar/>
                <hr />
            </div>
            <div className={styles.cardsContainer}>
                <Cards dogs={ dogsToShow }/>
            </div>
            <div>
                <Pagination currentPage={currentPage}
                onPageChange={setCurrentPage}
                pageSize={pageSize}
                totalIteams={dogs.length}
                />
            </div>
        </div>
    )

}

export default Home;