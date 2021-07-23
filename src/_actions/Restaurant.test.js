import * as ActionTypes from '../_actionTypes/Restaurant.actionTypes';
import * as ActionCreators from './Restaurant.action';
import mockFetch from 'axios';

jest.mock('axios');

describe("Actions", () => {
  const dispatch = jest.fn();

  afterAll(() => {
    dispatch.mockClear();        
  });

  beforeEach(() => {
    mockFetch.mockClear();
  })

  it("should return restart Data action type", () => {    

    const type = ActionCreators.restartData();
    const expected = 
      {
        type: ActionTypes.RESTART_DATA,      
      };

    expect(type).toEqual(expected);
    
  });

  it("should fetch the restaurants", async () => {
    mockFetch.get.mockResolvedValue( {data :[{
                createdAt: "2021-07-21T02:06:10.733Z",
                description: "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.",
                main_picture: "https://www.bing.com/th?id=AMMS_7d98053c20116f8e95cacda509b61d7a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1",
                name: "Domino's Pizza",
                _id: '123SFA2ASDAS221131'
            }]});
        
    await ActionCreators.fetchRestaurants()(dispatch);
    const expected = [
      {
        type: ActionTypes.FETCH_RESTAURANT_START,
      },
      {
        type: ActionTypes.FETCH_RESTAURANT_SUCCESS,
        payload: [{
            createdAt: "2021-07-21T02:06:10.733Z",
            description: "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.",
            main_picture: "https://www.bing.com/th?id=AMMS_7d98053c20116f8e95cacda509b61d7a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1",
            name: "Domino's Pizza",
            _id: '123SFA2ASDAS221131'
        }]
      },
    ];

    expect(dispatch.mock.calls.flat()).toEqual(expected);
    
  });

    it("should fail to fetch restaurants", async () => {
        mockFetch.mockReturnValueOnce(
        Promise.reject({
            error: '400',
        })
        );
        await ActionCreators.fetchRestaurants()(dispatch);
        const expected = [
        {
            type: ActionTypes.FETCH_RESTAURANT_START,            
        },
        {
            type: ActionTypes.FETCH_RESTAURANT_FAILED,
            payload: "No restaurant found"
        },
        ];

        expect(dispatch.mock.calls.flat()).toEqual(expected);
    });  

    it("should fetch restaurant by id", async () => {
        mockFetch.get.mockResolvedValue( {data : {
                    createdAt: "2021-07-21T02:06:10.733Z",
                    description: "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.",
                    main_picture: "https://www.bing.com/th?id=AMMS_7d98053c20116f8e95cacda509b61d7a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1",
                    name: "Domino's Pizza",
                    _id: '123SFA2ASDAS221131'
                }});
            
        await ActionCreators.fetchRestaurantById(1)(dispatch);
        const expected = [
          {
            type: ActionTypes.FETCH_RESTAURANT_BY_ID_START,
          },
          {
            type: ActionTypes.FETCH_RESTAURANT_BY_ID_SUCCESS,
            payload: {
                createdAt: "2021-07-21T02:06:10.733Z",
                description: "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.",
                main_picture: "https://www.bing.com/th?id=AMMS_7d98053c20116f8e95cacda509b61d7a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1",
                name: "Domino's Pizza",
                _id: '123SFA2ASDAS221131'
            }
          },
        ];
    
        expect(dispatch.mock.calls.flat()).toEqual(expected);
        
      });
    
        it("should fail to fetch restaurant by id", async () => {
            mockFetch.mockReturnValueOnce(
            Promise.reject({
                error: '400',
            })
            );
            await ActionCreators.fetchRestaurantById(1)(dispatch);
            const expected = [
            {
                type: ActionTypes.FETCH_RESTAURANT_BY_ID_START,            
            },
            {
                type: ActionTypes.FETCH_RESTAURANT_BY_ID_FAILED,
                payload: "No restaurants found"
            },
            ];
    
            expect(dispatch.mock.calls.flat()).toEqual(expected);
        });  

});