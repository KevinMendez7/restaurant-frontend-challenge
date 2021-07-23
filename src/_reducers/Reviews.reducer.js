import { 
    FETCH_REVIEWS_START, 
    FETCH_REVIEWS_SUCCESS, 
    FETCH_REVIEWS_FAILED,
    POST_REVIEW_START,
    POST_REVIEW_SUCCESS,
    POST_REVIEW_FAILED,
    RESTART_DATA
 } from '../_actionTypes/Reviews.actionTypes';

const initialState = {
    loading: false,
    data : []
}

const reviews = (state = initialState, action) => { 
    switch(action.type) {
        case FETCH_REVIEWS_START :             
            return {
                ...state,
                loading: true
            };
        case FETCH_REVIEWS_SUCCESS : 
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case FETCH_REVIEWS_FAILED : 
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
        case POST_REVIEW_START :             
            return {
                ...state,
                loading: true                
            };
        case POST_REVIEW_SUCCESS :            
        const data = state.data;
        data.push(action.payload);
            return {
                ...state,                
                data: [
                    ...data                    
                ]
            };
        case POST_REVIEW_FAILED : 
            return {
                ...state,                
                error: action.payload
            };        
        default : 
            return state;
    };
};

export default reviews;