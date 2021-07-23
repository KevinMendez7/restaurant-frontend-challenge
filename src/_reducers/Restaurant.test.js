import reducer from './Restaurant.reducer';
import * as actionTypes from '../_actionTypes/Restaurant.actionTypes';

describe('Restaurant Reducer', () => {
  const initialState = {
    loading: false,
    data : [],
    restaurant: {}    
  }    

  const fetchRetaurantByIdSuccessState = {
    loading: false,
    data : [],
    restaurant: {        
        createdAt: "2021-07-21T02:06:10.733Z",
        description: "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.",
        main_picture: "https://www.bing.com/th?id=AMMS_7d98053c20116f8e95cacda509b61d7a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1",
        name: "Domino's Pizza",
        _id: '123SFA2ASDAS221131'      
    }    
  }

  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should restart data', () => {    

    expect(reducer(fetchRetaurantByIdSuccessState, { type: actionTypes.RESTART_DATA})).toEqual(initialState);
  });

  
  it('Should return the fetchRetaurantStartState', () => {

    const fetchRetaurantStartState = {
      loading: true,
      data : [],
      restaurant: {}    
    }

    expect(reducer(initialState, { type: actionTypes.FETCH_RESTAURANT_START })).toEqual(fetchRetaurantStartState);
  });
  
  it('Should return the fetchRetaurantSuccessState', () => {

    const fetchRetaurantSuccessState = {
      loading: false,
      data : [{
        createdAt: "2021-07-21T02:06:10.733Z",
        description: "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.",
        main_picture: "https://www.bing.com/th?id=AMMS_7d98053c20116f8e95cacda509b61d7a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1",
        name: "Domino's Pizza",
        _id: '123SFA2ASDAS221131'
    }],
      restaurant: {}    
    }
    
    expect(reducer(initialState, { type: actionTypes.FETCH_RESTAURANT_SUCCESS, payload : [{
      createdAt: "2021-07-21T02:06:10.733Z",
      description: "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.",
      main_picture: "https://www.bing.com/th?id=AMMS_7d98053c20116f8e95cacda509b61d7a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1",
      name: "Domino's Pizza",
      _id: '123SFA2ASDAS221131'
    }] })).toEqual(fetchRetaurantSuccessState);
  });

  it('Should return the fetchRetaurantFailedState', () => {

    const fetchRetaurantFailedState = {
      loading: false,
      data : [],
      restaurant: {},
      error: 'No restaurants found'      
    }

    expect(reducer(initialState, { type: actionTypes.FETCH_RESTAURANT_FAILED, payload : 'No restaurants found'})).toEqual(fetchRetaurantFailedState);
  });

  it('Should return the fetchRetaurantByIdStartState', () => {

    const fetchRetaurantByIdStartState = {
      loading: true,
      data : [],
      restaurant: {}    
    }

    expect(reducer(initialState, { type: actionTypes.FETCH_RESTAURANT_BY_ID_START })).toEqual(fetchRetaurantByIdStartState);
  });
  
  it('Should return the fetchRetaurantByIdSuccessState', () => {    
    
    expect(reducer(initialState, { type: actionTypes.FETCH_RESTAURANT_BY_ID_SUCCESS, payload : {
      createdAt: "2021-07-21T02:06:10.733Z",
      description: "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.",
      main_picture: "https://www.bing.com/th?id=AMMS_7d98053c20116f8e95cacda509b61d7a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1",
      name: "Domino's Pizza",
      _id: '123SFA2ASDAS221131'
    }})).toEqual(fetchRetaurantByIdSuccessState);
  });

  it('Should return the fetchRetaurantByIdFailedState', () => {

    const fetchRetaurantByIdFailedState = {
      loading: false,
      data : [],
      restaurant: {},
      error: 'No restaurants found'      
    }
    
    expect(reducer(initialState, { type: actionTypes.FETCH_RESTAURANT_BY_ID_FAILED, payload : 'No restaurants found'})).toEqual(fetchRetaurantByIdFailedState);
  });

});