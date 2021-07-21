import { FETCH_RESTAURANT_START, FETCH_RESTAURANT_SUCCESS, FETCH_RESTAURANT_FAILED } from '../_actionTypes/Restaurant.actionTypes';

export const fetchRestaurants = () => {    

    const request = () => {    
        return { type: FETCH_RESTAURANT_START }
    }
    
    const success = (data) => {
        return { type: FETCH_RESTAURANT_SUCCESS, payload: data }
    }
    
    const failed = (error) => {
        return { type: FETCH_RESTAURANT_FAILED, payload: error }
    }
    
    return async dispatch => {        
        dispatch(request());
        try {
            const resp = await fetch('http://localhost:4000/restaurant');
            const restaurants = await resp.json();            
            dispatch(success(restaurants));
            
        } catch(error) {
            dispatch(failed(error));
        }
    }    

};