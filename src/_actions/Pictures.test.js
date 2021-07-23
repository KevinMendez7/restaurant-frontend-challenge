import * as ActionTypes from '../_actionTypes/Pictures.actionTypes';
import * as ActionCreators from './Pictures.action';
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

  it("should fetch the pictures", async () => {

    const id = '123232412412';

    mockFetch.get.mockResolvedValue({ data : {
        data: [
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
    }});
        
    await ActionCreators.fetchPictures(id)(dispatch);
    const expected = [
      {
        type: ActionTypes.FETCH_PICTURES_START,
      },
      {
        type: ActionTypes.FETCH_PICTURES_SUCCESS,
        payload: [
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
      },
    ];

    expect(dispatch.mock.calls.flat()).toEqual(expected);
    
  });

    it("should fail to fetch pictures", async () => {
        const id = '1232345324';
        mockFetch.mockReturnValueOnce(
        Promise.reject({
            error: '400',
        })
        );
        await ActionCreators.fetchPictures(id)(dispatch);
        const expected = [
        {
            type: ActionTypes.FETCH_PICTURES_START,            
        },
        {
            type: ActionTypes.FETCH_PICTURES_FAILED,
            payload: "No pictures found"
        },
        ];

        expect(dispatch.mock.calls.flat()).toEqual(expected);
    });  
    
});