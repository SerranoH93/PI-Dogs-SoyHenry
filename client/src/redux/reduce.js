import { GET_ALL_DOGS } from './action-types';


const initialState = {
    dogs: [], //*Get all dogs
    dogsGetted: [] //* Copy all dogs
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: [...action.payload],
                dogsGetted: action.payload

            };
        default:
            return {...state};
    }
}

export default rootReducer;