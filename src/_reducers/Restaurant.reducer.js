import { 
    FETCH_RESTAURANT_START, 
    FETCH_RESTAURANT_SUCCESS, 
    FETCH_RESTAURANT_FAILED,
    FETCH_RESTAURANT_BY_ID_START,
    FETCH_RESTAURANT_BY_ID_SUCCESS,
    FETCH_RESTAURANT_BY_ID_FAILED,
    RESTART_DATA
} from '../_actionTypes/Restaurant.actionTypes';

const initialState = {
    loading: false,
    data : [],
    restaurant: {}    
}

const restaurant = (state = initialState ,action) => {    
    switch(action.type) {
        case FETCH_RESTAURANT_START :             
            return {
                ...state,
                loading: true
            };
        case FETCH_RESTAURANT_SUCCESS : 
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case FETCH_RESTAURANT_FAILED : 
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_RESTAURANT_BY_ID_START :             
            return {
                ...state,
                loading: true
            };
        case FETCH_RESTAURANT_BY_ID_SUCCESS : 
            return {
                ...state,
                loading: false,
                restaurant: action.payload
            };
        case FETCH_RESTAURANT_BY_ID_FAILED : 
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case RESTART_DATA : 
            return {
                ...state,                
                restaurant: []
            };
        default : 
            return state;
    };
};

export default restaurant;