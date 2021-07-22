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
            const resp = await fetch(`http://localhost:4000/restaurant/${restaurantId}/pictures`);
            const pictures = await resp.json(); 
            if(!pictures) {
                return dispatch(failed(FETCH_PICTURES_FAILED, 'No pictures found'));    
            }        
            dispatch(success(FETCH_PICTURES_SUCCESS, pictures.data));
            
        } catch(error) {
            console.error(error);
            dispatch(failed(FETCH_PICTURES_FAILED, error));
        }
    }    

};

const request = (type) => ({ type });
    
const success = (type, data) => ({ type, payload: data })

const failed = (type, error) => ({ type, payload: error });