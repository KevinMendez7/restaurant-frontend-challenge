import reducer from './Reviews.reducer';
import * as actionTypes from '../_actionTypes/Reviews.actionTypes';

describe('Reviews Reducer', () => {
  const initialState = {
    loading: false,
    data : []     
  }    

  const fetchReviewsSuccessState = {
    loading: false,
    data : [
        {
            comment: "The best fast food ever!!!",
            createdAt: "2021-07-21T02:08:43.925Z",
            name: "Camilo Lizalde",
            restaurant: "60f7811204ff2421f3ac6d0c",                        
        },
        {
            comment: "The best fast food ever ever ever!!!",
            createdAt: "2021-07-21T02:08:43.925Z",
            name: "Ronaldo Erbert",
            restaurant: "60f7811204ff2421f3ac6d0c",
        },
    ]
  }

  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should restart data', () => {    

    expect(reducer(fetchReviewsSuccessState, { type: actionTypes.RESTART_DATA})).toEqual(initialState);
  });

  
  it('Should return the fetchReviewsStartState', () => {

    const fetchReviewsStartState = {
      loading: true,
      data : []      
    }

    expect(reducer(initialState, { type: actionTypes.FETCH_REVIEWS_START })).toEqual(fetchReviewsStartState);
  });
  
  it('Should return the fetchReviewsSuccessState', () => {
    
    expect(reducer(initialState, { type: actionTypes.FETCH_REVIEWS_SUCCESS, payload : [
        {
            comment: "The best fast food ever!!!",
            createdAt: "2021-07-21T02:08:43.925Z",
            name: "Camilo Lizalde",
            restaurant: "60f7811204ff2421f3ac6d0c",                        
        },
        {
            comment: "The best fast food ever ever ever!!!",
            createdAt: "2021-07-21T02:08:43.925Z",
            name: "Ronaldo Erbert",
            restaurant: "60f7811204ff2421f3ac6d0c",
        },
    ] })).toEqual(fetchReviewsSuccessState);
  });

  it('Should return the fetchReviewsFailedState', () => {

    const fetchReviewsFailedState = {
      loading: false,
      data : [],
      error: 'No reviews found'      
    }

    expect(reducer(initialState, { type: actionTypes.FETCH_REVIEWS_FAILED, payload : 'No reviews found'})).toEqual(fetchReviewsFailedState);
  });

  it('Should return the postReviewsByIdStartState', () => {

    const postReviewsStartState = {
      loading: true,
      data : []      
    }

    expect(reducer(initialState, { type: actionTypes.POST_REVIEW_START })).toEqual(postReviewsStartState);
  });

  it('Should return the postReviewsFailedState', () => {

    const postReviewsByIdFailedState = {
      loading: false,
      data : [],
      error: 'Something happen posting a review'      
    }
    
    expect(reducer(initialState, { type: actionTypes.POST_REVIEW_FAILED, payload : 'Something happen posting a review'})).toEqual(postReviewsByIdFailedState);
  });
  
  it('Should return the postReviewsSuccessState', () => {    

    const postReviewsSuccessState = {
        loading: false,
        data : [        
            {                     
                __v : 0,                 
                _id : '60f7638d43b2401d0e139cbe',
                comment : "This restaurant has the best buffet",
                createdAt : '2021-07-21T00:00:13.037+00:00',                
                name : "Kevin Mendez",
                restaurant : '60f760e42843ca1c38cbf73b',
            }
        ]
      }
    
    expect(reducer(initialState, { type: actionTypes.POST_REVIEW_SUCCESS, payload : {     
        _id : '60f7638d43b2401d0e139cbe',
        name : "Kevin Mendez",
        comment : "This restaurant has the best buffet",
        restaurant : '60f760e42843ca1c38cbf73b',
        createdAt : '2021-07-21T00:00:13.037+00:00',
        __v : 0                 
      }})).toEqual(postReviewsSuccessState);
  });

});