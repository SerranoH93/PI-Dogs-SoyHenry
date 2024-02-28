import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css';

const NotFound = () => {

    return (
        <div className={styles.notFoundContainer}>
            <img className={styles.imageNotFound} src="https://media.istockphoto.com/id/1250923288/vector/error-404-template-with-cosmos-background-page-not-found-message.jpg?s=170667a&w=0&k=20&c=XgOvtmMwa-8d5k20nTD-0Hh3c_e2ArQQUUL7TYuq-sk=" alt="Not Found" />
            <Link to='/home'><button >Go back!</button></Link>
        </div>
    );
} 

export default NotFound;