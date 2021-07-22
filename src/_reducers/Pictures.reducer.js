import { 
    FETCH_PICTURES_START, 
    FETCH_PICTURES_SUCCESS, 
    FETCH_PICTURES_FAILED,
    RESTART_DATA
 } from '../_actionTypes/Pictures.actionTypes';

const initialState = {
    loading: false,
    data : []
}

const pictures = (state = initialState, action) => { 
    switch(action.type) {
        case FETCH_PICTURES_START :             
            return {
                ...state,
                loading: true
            };
        case FETCH_PICTURES_SUCCESS : 
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case FETCH_PICTURES_FAILED : 
            return {
                ...state,
                loading: false,
                error: action.payload
            };        
        case RESTART_DATA : 
            return {
                ...state,
                data: []
            };        
        default : 
            return state;
    };
};

export default pictures;