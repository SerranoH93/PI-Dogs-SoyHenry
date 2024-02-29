import { GET_ALL_DOGS, 
    GET_DOG_BY_ID, 
    GET_DOGS_BY_NAME, 
    GET_TEMPERAMENTS, 
    FILTER_BY_ORIGN, 
    FILTER_BY_TEMPERAMENT,
    ORDER_BY_NAME,
    ORDER_BY_WEIGHT, 
    REFRESH, 
    POST_NEW_DOG,
    SET_ORIGIN_FILTER,
    SET_TEMPERAMENT_FILTER,
    SET_NAME_FILTER,
    SET_WEIGHT_FILTER,
    APPLY_FILTERS
} from './action-types';
    
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

export const postNewDog = (newDog) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${serverURL}/dogs`, newDog);
            if(data.error) throw new Error(data.error)
            window.alert("New dog was created successfully.");
            return dispatch({
                type: POST_NEW_DOG,
                payload: data
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

export const setOrigin = (value) => {
    return {
        type: SET_ORIGIN_FILTER,
        payload: value
    }
}

export const setTemperament = (value) => {
    return {
        type: SET_TEMPERAMENT_FILTER,
        payload: value
    }
}

export const setName = (value) => {
    return {
        type: SET_NAME_FILTER,
        payload: value
    }
}

export const setWeight = (value) => {
    return {
        type: SET_WEIGHT_FILTER,
        payload: value
    }
}

export const applyFilters = () => {
    return {
        type: APPLY_FILTERS,
        payload: {}
    }
    
}