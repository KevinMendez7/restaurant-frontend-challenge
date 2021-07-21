import { FETCH_RESTAURANT_START, FETCH_RESTAURANT_SUCCESS, FETCH_RESTAURANT_FAILED } from '../_actionTypes/Restaurant.actionTypes';

const initialState = {
    loading: false,
    data : []    
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
        default : 
            return state;
    };
};

export default restaurant;