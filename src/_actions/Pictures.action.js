import axios from 'axios';
import { 
    FETCH_PICTURES_START, 
    FETCH_PICTURES_SUCCESS, 
    FETCH_PICTURES_FAILED,
    RESTART_DATA    
} from '../_actionTypes/Pictures.actionTypes';

export const restartData = _ => ({ type: RESTART_DATA });

export const fetchPictures = (restaurantId) => {                
    return async dispatch => {                
        dispatch(request(FETCH_PICTURES_START));
        try {            
 
            if(!restaurantId) {
                return dispatch(failed(FETCH_PICTURES_FAILED, 'Restaurant id must be provided'));
            }

            const pictures = await axios.get(`http://localhost:4000/restaurant/${restaurantId}/pictures`);            
            if(!pictures) {
                return dispatch(failed(FETCH_PICTURES_FAILED, 'No pictures found'));    
            }        
            return dispatch(success(FETCH_PICTURES_SUCCESS, pictures.data.data));
            
        } catch(error) {
            console.error(error);
            return dispatch(failed(FETCH_PICTURES_FAILED, error));
        }        
    }    
};

const request = (type) => ({type });
    
const success = (type, data) => ({ type, payload: data })

const failed = (type, error) => ({ type, payload: error });