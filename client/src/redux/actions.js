import { GET_ALL_DOGS, GET_DOG_BY_ID } from './action-types';
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