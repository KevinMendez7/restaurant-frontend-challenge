import reducer from './Pictures.reducer';
import * as actionTypes from '../_actionTypes/Pictures.actionTypes';

describe('Picutes Reducer', () => {
  const initialState = {
    loading: false,
    data : []      
  }    

  const fetchPicutesSuccessState = {
    loading: false,
    data : [
        {
            createdAt: "2021-07-21T19:29:38.285Z",
            restaurant: "60f7811204ff2421f3ac6d0c",
            url: "https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219133793_4508447765854436_4044760232232157000_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=2c4854&_nc_ohc=rh3SYP_8BkUAX9xu-Ht&_nc_ht=scontent.fgua5-1.fna&oh=444cfeac170663bd9966a2a33d75dac7&oe=60FCC1C8",
            __v: 0,
            _id: "60f875a2f6903c6c33fa837c"
        },
        {
            createdAt: "2021-07-21T19:31:01.507Z",
            restaurant: "60f7811204ff2421f3ac6d0c",
            url: "https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219128205_4502329233132956_4939786019138836719_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=2c4854&_nc_ohc=dK1xs9Li1IUAX_sA_kT&_nc_ht=scontent.fgua5-1.fna&oh=dfc5efd4eda8abc7f95b549cf5a3fd23&oe=60FDD3D3",
            __v: 0,
            _id: "60f875f5f6903c6c33fa8382"
        },
    ]    
  }

  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should restart data', () => {    

    expect(reducer(fetchPicutesSuccessState, { type: actionTypes.RESTART_DATA})).toEqual(initialState);
  });

  
  it('Should return the fetchPicutesStartState', () => {

    const fetchPicutesStartState = {
      loading: true,
      data : []       
    }

    expect(reducer(initialState, { type: actionTypes.FETCH_PICTURES_START })).toEqual(fetchPicutesStartState);
  });
  
  it('Should return the fetchPicutesSuccessState', () => {    
    
    expect(reducer(initialState, { type: actionTypes.FETCH_PICTURES_SUCCESS, payload : [
        {
            createdAt: "2021-07-21T19:29:38.285Z",
            restaurant: "60f7811204ff2421f3ac6d0c",
            url: "https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219133793_4508447765854436_4044760232232157000_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=2c4854&_nc_ohc=rh3SYP_8BkUAX9xu-Ht&_nc_ht=scontent.fgua5-1.fna&oh=444cfeac170663bd9966a2a33d75dac7&oe=60FCC1C8",
            __v: 0,
            _id: "60f875a2f6903c6c33fa837c"
        },
        {
            createdAt: "2021-07-21T19:31:01.507Z",
            restaurant: "60f7811204ff2421f3ac6d0c",
            url: "https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219128205_4502329233132956_4939786019138836719_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=2c4854&_nc_ohc=dK1xs9Li1IUAX_sA_kT&_nc_ht=scontent.fgua5-1.fna&oh=dfc5efd4eda8abc7f95b549cf5a3fd23&oe=60FDD3D3",
            __v: 0,
            _id: "60f875f5f6903c6c33fa8382"
        },
    ] })).toEqual(fetchPicutesSuccessState);
  });

  it('Should return the fetchPicutesFailedState', () => {

    const fetchPicutesFailedState = {
      loading: false,
      data : [],      
      error: 'No pictures found'      
    }

    expect(reducer(initialState, { type: actionTypes.FETCH_PICTURES_FAILED, payload : 'No pictures found'})).toEqual(fetchPicutesFailedState);
  });  

});