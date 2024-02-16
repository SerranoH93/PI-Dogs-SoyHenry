import React, { useState } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

const defaultDogImg = 'https://img.freepik.com/vector-gratis/ilustracion-silueta-chihuahua-diseno-plano_23-2150341397.jpg'


const Card = ({id, image, name, temperament, weight}) => {

    return (
        <div className={styles.card}>
            <Link to={ `/detail/${id}` }>
                <img src={ image || defaultDogImg } alt={ name } />
            </Link>            
            <p>Name: { name }</p>
            <p>Temperament: { temperament }</p>
            <p>Weight: { weight } </p>
        </div>
    )
}


export default Card;