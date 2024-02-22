import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getAllDogs, getDogsByName, refresh } from '../../redux/actions';
import Cards from '../../components/cards/Cards';
import Pagination from '../../components/pagination/Pagination';
import NavBar from '../../components/navbar/NavBar';
import SearchBar from '../../components/searchbar/SearchBar';
import styles from './Home.module.css'

const Home = () => {
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogsGetted);

    useEffect(() => {        
        dispatch(getAllDogs());
    }, [dispatch])

    //* Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(8);
    const starIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    const dogsToShow = dogs.slice(starIndex, endIndex); 

    //* Search by name
    const [input, setInput] = useState("");
    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleButton = (event) => {
        event.preventDefault();        
        dispatch(getDogsByName(input))        
        document.getElementById('search').value = '';
    }

    //* Refresh
    const handleRefresh = () => {
        dispatch(refresh())
    }


    return (
        <div>
            <div>
                <NavBar handleRefresh={handleRefresh}/>
                <hr />
                <SearchBar
                    handleInput={handleInput}
                    handleButton={handleButton}
                    input={input}
                />
                <hr />
            </div>
            <div className={styles.cardsContainer}>
                <Cards
                    dogs={dogsToShow} />
            </div>
            <div>
                <Pagination
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    pageSize={pageSize}
                    totalIteams={dogs.length}
                />
            </div>
        </div>
    )

}

export default Home;