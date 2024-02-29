import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { 
    getAllDogs, 
    getDogsByName, 
    filterByOrigin, 
    getTemperaments, 
    filterByTemperament, 
    orderByName, 
    orderByWeight, 
    refresh } from '../../redux/actions';
import Cards from '../../components/cards/Cards';
import Pagination from '../../components/pagination/Pagination';
import NavBar from '../../components/navbar/NavBar';
import SearchBar from '../../components/searchbar/SearchBar';
import styles from './Home.module.css'
import Filters from '../../components/filters/Filters';

const Home = () => {
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogsGetted);
    const temperamentsGetted = useSelector(state => state.temperaments);

    useEffect(() => {        
        dispatch(getAllDogs());
        dispatch(getTemperaments());
    }, [dispatch])

    //* Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(8);
    const starIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    console.log({dogs})
    const dogsToShow = dogs ? dogs.slice(starIndex, endIndex) : []; 

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

    //*Filters
    //? Origin filter
    const handleFilterByOrigin = event => {
        event.preventDefault();
        dispatch(filterByOrigin(event.target.value))
        setCurrentPage(1)
    }

    //? Temperament filter
    const handleFilterByTemperament = event => {
        event.preventDefault();
        dispatch(filterByTemperament(event.target.value))  
        setCurrentPage(1)     
    }
    
    //*Order
    //? By Name
    const handleOrderByName = event => {
        event.preventDefault();        
        dispatch(orderByName(event.target.value))     
        setCurrentPage(1)  
    } 

    //? By Weigth
    const handleOrderByWeight = event => {
        event.preventDefault();        
        dispatch(orderByWeight(event.target.value))    
        setCurrentPage(1)   
    } 

    //* Refresh
    const handleRefresh = () => {
        dispatch(refresh())
        setInput('')
    }

    return (
        <div>
            <div>
                <NavBar 
                    handleRefresh={handleRefresh}                                        
                />                
                <SearchBar
                    handleInput={handleInput}
                    handleButton={handleButton}
                    input={input}
                />
                
                <Filters 
                    handleFilterByOrigin={handleFilterByOrigin}
                    handleFilterByTemperaments={handleFilterByTemperament}
                    temperamentsGetted={temperamentsGetted}
                    handleOrderByWeight={handleOrderByWeight}
                    handleOrderByName={handleOrderByName}                   
                />
                    
                
            </div>
            <div>
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