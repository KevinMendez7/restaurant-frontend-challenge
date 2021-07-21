import { 
    FETCH_PICTURES_START, 
    FETCH_PICTURES_SUCCESS, 
    FETCH_PICTURES_FAILED    
} from '../_actionTypes/Pictures.actionTypes';

export const fetchPictures = (restaurantId) => {        
    
    return async dispatch => {        
        dispatch(request(FETCH_PICTURES_START));
        try {
            const resp = await fetch(`http://localhost:4000/restaurant/${restaurantId}/pictures`);
            const pictures = await resp.json();   
            console.log(pictures)            
            dispatch(success(FETCH_PICTURES_SUCCESS, pictures.data));
            
        } catch(error) {
            dispatch(failed(FETCH_PICTURES_FAILED, error));
        }
    }    

};

const request = (type) => ({ type });
    
const success = (type, data) => ({ type, payload: data })

const failed = (type, error) => ({ type, payload: error });