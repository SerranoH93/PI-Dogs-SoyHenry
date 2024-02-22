import { GET_ALL_DOGS, GET_DOG_BY_ID, GET_DOGS_BY_NAME, REFRESH } from './action-types';


const initialState = {
    dogs: [], //*Get all dogs
    dogsGetted: [], //* Copy all dogs
    dogDetail: [] //* Dog detail
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: [...action.payload],
                dogsGetted: action.payload

            };
        case GET_DOG_BY_ID:
            return {
                ...state,
                dogDetail: action.payload
            };
        case GET_DOGS_BY_NAME:
            return {
                ...state,
                dogsGetted: action.payload
            }
        case REFRESH:
            return {
                ...state,               
                dogs: [...action.payload],
                dogsGetted: action.payload
            }
        default:
            return {...state};
    }
}

export default rootReducer;