import { 
    FETCH_REVIEWS_START, 
    FETCH_REVIEWS_SUCCESS, 
    FETCH_REVIEWS_FAILED,
    POST_REVIEW_START,
    POST_REVIEW_SUCCESS,
    POST_REVIEW_FAILED
} from '../_actionTypes/Reviews.actionTypes';

export const fetchReviews = (restaurantId) => {        
    
    return async dispatch => {        
        dispatch(request(FETCH_REVIEWS_START));
        try {
            const resp = await fetch(`http://localhost:4000/restaurant/${restaurantId}/review`);
            const reviews = await resp.json();               
            dispatch(success(FETCH_REVIEWS_SUCCESS, reviews.data));
            
        } catch(error) {
            dispatch(failed(FETCH_REVIEWS_FAILED, error));
        }
    }    

};

export const postReview = (restaurantId, { name, comment }) => {    
    return async dispatch => {
        dispatch(request(POST_REVIEW_START));
        try {
            const resp = await fetch(
                `http://localhost:4000/restaurant/${restaurantId}/review`, 
                { 
                    method: 'POST', 
                    body: JSON.stringify({ name, comment }),
                    headers: {
                        'Content-Type': 'application/json'
                    }                     
                },
                
            );
            const review = await resp.json();                           
            dispatch(success(POST_REVIEW_SUCCESS, review));            
        } catch(error) {
            console.error(error);
            dispatch(success(POST_REVIEW_FAILED, error));            
        }
    }

}

const request = (type) => ({ type });
    
const success = (type, data) => ({ type, payload: data })

const failed = (type, error) => ({ type, payload: error });