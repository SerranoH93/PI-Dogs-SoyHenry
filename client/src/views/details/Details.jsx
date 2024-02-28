import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDogById } from '../../redux/actions';
import NavBar from '../../components/navbar/NavBar';
import styles from './Details.module.css';

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const dogDetails = useSelector(state => state.dogDetail);

    useEffect(() => {
        dispatch(getDogById(id))
    }, [dispatch, id])

    return (
        <div>
            <NavBar />
            <div className={styles.detailsContainer}>
                <h2>Detalles</h2>
                <h3>{dogDetails.name}</h3>
                <p>ID: {dogDetails.id}</p>
                <img src={dogDetails.image} alt={dogDetails.name} />
                <p>Name: {dogDetails.name}</p>
                <p>Height: {dogDetails.height}</p>
                <p>Weight: {dogDetails.weight}</p>
                <p>Life Span: {dogDetails.life_span}</p>
                <p>Temperament:</p> 
                <div className={styles.detailsTemperamentContainer}>
                    {dogDetails.temperament ? dogDetails.temperament.map((temp, index) => (
                        <button key={index}>{temp.trim()}</button>
                    )) : []}
                </div>
            </div>
        </div>
    )
}

export default Details;