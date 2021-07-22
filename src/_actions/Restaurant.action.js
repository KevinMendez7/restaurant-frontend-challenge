import { 
    FETCH_RESTAURANT_START, 
    FETCH_RESTAURANT_SUCCESS, 
    FETCH_RESTAURANT_FAILED,
    FETCH_RESTAURANT_BY_ID_START,
    FETCH_RESTAURANT_BY_ID_SUCCESS,
    FETCH_RESTAURANT_BY_ID_FAILED,
    RESTART_DATA
} from '../_actionTypes/Restaurant.actionTypes';

export const restartData = _ => ({ type: RESTART_DATA });

export const fetchRestaurants = () => {        
    
    return async dispatch => {        
        dispatch(request(FETCH_RESTAURANT_START));
        try {
            const resp = await fetch('http://localhost:4000/restaurant');
            const restaurants = await resp.json();       
            
            if(!restaurants) {
                return dispatch(failed(FETCH_RESTAURANT_FAILED, 'No pictures found'));    
            }  
            
            dispatch(success(FETCH_RESTAURANT_SUCCESS, restaurants));
            
        } catch(error) {
            dispatch(failed(FETCH_RESTAURANT_FAILED, error));
        }
    }    

};

export const fetchRestaurantById = id => {
    return async dispatch => {        
        dispatch(request(FETCH_RESTAURANT_BY_ID_START));
        try {
            const resp = await fetch(`http://localhost:4000/restaurant/${id}`);
            const restaurants = await resp.json();     
            
            if(!restaurants) {
                return dispatch(failed(FETCH_RESTAURANT_FAILED, 'No restaurants found'));    
            }

            dispatch(success(FETCH_RESTAURANT_BY_ID_SUCCESS, restaurants));
            
        } catch(error) {
            console.log(error);
            dispatch(failed(FETCH_RESTAURANT_BY_ID_FAILED, error));
        }
    } 
}

const request = type => ({ type });
const success = (type, data) => ({ type, payload: data });
const failed = (type, error) => ({ type, payload: error });