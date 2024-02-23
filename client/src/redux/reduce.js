import { GET_ALL_DOGS, 
    GET_DOG_BY_ID, 
    GET_DOGS_BY_NAME, 
    GET_TEMPERAMENTS, 
    FILTER_BY_ORIGN, 
    FILTER_BY_TEMPERAMENT, 
    ORDER_BY_NAME,
    ORDER_BY_WEIGHT, 
    REFRESH  } from './action-types';


const initialState = {
    dogs: [], //*Get all dogs
    dogsGetted: [], //* Copy all dogs
    dogDetail: [], //* Dog detail
    temperaments: [] //* Get all temperaments
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
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload        
            };
        case FILTER_BY_ORIGN:
            const filterByOrigin = state.dogs.filter(origin =>{
                if(action.payload === 'All Origins') {
                    return origin;
                } else if (action.payload === 'DataBase') {
                    return typeof origin.id !== "number";
                } else {
                    return typeof origin.id === "number";
                }
            })
            return {
                ...state,
                dogsGetted: filterByOrigin
            }
        case FILTER_BY_TEMPERAMENT:
            let temp = [];
            temp = state.dogs.filter(
                (dog) =>
                    dog.temperament &&
                    action.payload &&
                    dog.temperament.includes(action.payload)
            );
            return {
                ...state,                
                dogsGetted: temp,
            }
        case ORDER_BY_NAME: 
            const dogsToOrder = action.payload;
            let dogsToName = dogsToOrder === 'A-Z' 
            ? [...state.dogs].sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                return nameA.localeCompare(nameB);
            })
            : dogsToOrder === 'Z-A'
            ?[...state.dogsGetted].sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                return nameB.localeCompare(nameA);
                })
                :[...state.dogs]
            return {
                ...state,
                dogsGetted: dogsToName
            }
        case ORDER_BY_WEIGHT:
            const orderWeight = action.payload;
            switch (orderWeight) {
                case 'Heavy':
                    const orderedByWeightHeavy = [...state.dogs].sort((a, b) => {
                        const weightA = parseInt(a.weight.split(' - ')[1]);
                        const weightB = parseInt(b.weight.split(' - ')[1]);
                        return weightB - weightA;
                    });
                    return {
                        ...state,
                        dogsGetted: orderedByWeightHeavy
                    }
                case 'Light':
                    const orderedByWeightLight = [...state.dogs].sort((a, b) => {
                        const weightA = parseInt(a.weight.split(' - ')[1]);
                        const weightB = parseInt(b.weight.split(' - ')[1]);
                        return weightA - weightB;
                    });
                    return {
                        ...state,
                        dogsGetted: orderedByWeightLight
                    }
                default:
                    return state;
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