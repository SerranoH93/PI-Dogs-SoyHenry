import React from 'react';
import Card from '../card/Card';
import styles from './Cards.module.css';

const Cards = ({dogs}) => {
    return (        
            <div className={styles.cardsContainer}>
                {
                    !dogs.length
                    ? <p>No dogs to show</p>
                    : dogs.map(dog => (
                        <Card
                            key={ dog.id } 
                            id={ dog.id }
                            image={ dog.image }
                            name={ dog.name}
                            temperament={ dog.temperament ? dog.temperament.map(a => a.trim()).join(', '): [] }
                            weight={ dog.weight }
                        />
                    ))
                }
            </div>
        
    )
}

export default Cards;
