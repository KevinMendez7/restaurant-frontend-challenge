import { 
    FETCH_PICTURES_START, 
    FETCH_PICTURES_SUCCESS, 
    FETCH_PICTURES_FAILED
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
        default : 
            return state;
    };
};

export default pictures;