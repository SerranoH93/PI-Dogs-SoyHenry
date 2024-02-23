import { GET_ALL_DOGS, 
    GET_DOG_BY_ID, 
    GET_DOGS_BY_NAME, 
    GET_TEMPERAMENTS, 
    FILTER_BY_ORIGN, 
    FILTER_BY_TEMPERAMENT,
    ORDER_BY_NAME,
    ORDER_BY_WEIGHT, 
    REFRESH } from './action-types';
import axios from 'axios';

const serverURL = 'http://localhost:3001';

export const getAllDogs = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${serverURL}/dogs`);
            const dogs = data;
            dispatch({
                type: GET_ALL_DOGS,
                payload: dogs
            })
        } catch (error) {
            alert(error.message);
        }
    }
}

export const getDogById = (dogId) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${serverURL}/dogs/${dogId}`);
            return dispatch({
                type: GET_DOG_BY_ID,
                payload: data
            })
        } catch (error) {
            alert(error.message);
        }
    }
}

export const getDogsByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${serverURL}/dogs/?name=${name}`);            
            
            return dispatch({
                type: GET_DOGS_BY_NAME,
                payload: data
            })
        } catch (error) {
            alert(error.message);
        }
    }
}

export const  getTemperaments = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${serverURL}/dogs/temperaments`);
            const temperaments = data;
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: temperaments
            })
        } catch (error) {
            alert(error.message);
        }
    }
}

export const filterByOrigin = (origin) => {
    return {
        type: FILTER_BY_ORIGN,
        payload: origin
    }
}

export const filterByTemperament = (temperament) => {
    return {
        type: FILTER_BY_TEMPERAMENT,
        payload: temperament
    }
}

export const orderByName = (orderName) => {
    return {
        type: ORDER_BY_NAME,
        payload: orderName
    }
}

export const orderByWeight = (orderWeight) => {
    return {
        type: ORDER_BY_WEIGHT,
        payload: orderWeight
    }
}

export const refresh = () => {
    return getAllDogs()
}