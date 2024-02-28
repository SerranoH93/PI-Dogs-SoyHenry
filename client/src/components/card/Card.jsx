import React, { useState } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

const defaultDogImg = 'https://img.freepik.com/vector-gratis/ilustracion-silueta-chihuahua-diseno-plano_23-2150341397.jpg'


const Card = ({id, image, name, temperament, weight}) => {    

    const temperaments = temperament.split(', ');    

    return (
        <div className={styles.cardContainer}>
            <Link to={ `/detail/${id}` }>
                <img src={ image || defaultDogImg } alt={ name } />
            </Link>            
            <p>{ name }</p>
            <div className={styles.temperamentsContainer}>
                {temperaments.map((temp, index) => (
                    <button key={index}>{temp}</button>
                ))}

            </div>
            <p>Weight</p>
            <p>{ weight }</p>
        </div>
    )
}


export default Card;