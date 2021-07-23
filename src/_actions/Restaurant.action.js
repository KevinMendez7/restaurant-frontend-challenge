import axios from 'axios';
import { 
    FETCH_RESTAURANT_START, 
    FETCH_RESTAURANT_SUCCESS, 
    FETCH_RESTAURANT_FAILED,
    FETCH_RESTAURANT_BY_ID_START,
    FETCH_RESTAURANT_BY_ID_SUCCESS,
    FETCH_RESTAURANT_BY_ID_FAILED,
    RESTART_DATA
} from '../_actionTypes/Restaurant.actionTypes';

export const restartData = () => { return { type: RESTART_DATA }};

export const fetchRestaurants = _ => {        
    
    return async dispatch => {        
        dispatch(request(FETCH_RESTAURANT_START));
        try {
            const restaurants = await axios.get('http://localhost:4000/restaurant');                        
            if(!restaurants) {
                return dispatch(failed(FETCH_RESTAURANT_FAILED, 'No restaurant found'));    
            }  
            
            dispatch(success(FETCH_RESTAURANT_SUCCESS, restaurants.data));
            
        } catch(error) {
            dispatch(failed(FETCH_RESTAURANT_FAILED, error));
        }
    }    

};

export const fetchRestaurantById = id => {
    return async dispatch => {        
        dispatch(request(FETCH_RESTAURANT_BY_ID_START));
        try {

            if(!id) {
                return dispatch(failed(FETCH_RESTAURANT_BY_ID_FAILED, 'Restaurant id must be provided'));
            }
            const restaurants = await axios.get(`http://localhost:4000/restaurant/${id}`);                        
            if(!restaurants) {
                return dispatch(failed(FETCH_RESTAURANT_BY_ID_FAILED, 'No restaurants found'));    
            }

            dispatch(success(FETCH_RESTAURANT_BY_ID_SUCCESS, restaurants.data));
            
        } catch(error) {
            console.log(error);
            dispatch(failed(FETCH_RESTAURANT_BY_ID_FAILED, error));
        }
    } 
}

const request = type => ({ type });
const success = (type, data) => ({ type, payload: data });
const failed = (type, error) => ({ type, payload: error });