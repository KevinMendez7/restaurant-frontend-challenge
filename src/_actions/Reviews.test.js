import * as ActionTypes from '../_actionTypes/Reviews.actionTypes';
import * as ActionCreators from './Reviews.action';
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

  it("should fetch the reviews", async () => {

    const id = '123232412412';

    mockFetch.get.mockResolvedValue({                
        data: {
            data: [
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
    });
        
    await ActionCreators.fetchReviews(id)(dispatch);
    const expected = [
      {
        type: ActionTypes.FETCH_REVIEWS_START,
      },
      {
        type: ActionTypes.FETCH_REVIEWS_SUCCESS,
        payload: [
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
      },
    ];

    expect(dispatch.mock.calls.flat()).toEqual(expected);
    
  });
  

    it("should fail to fetch reviews", async () => {
        const id = '1232345324';
        mockFetch.mockReturnValueOnce(
        Promise.reject({
            error: '400',
        })
        );
        await ActionCreators.fetchReviews(id)(dispatch);
        const expected = [
        {
            type: ActionTypes.FETCH_REVIEWS_START,            
        },
        {
            type: ActionTypes.FETCH_REVIEWS_FAILED,
            payload: "No reviews found"
        },
        ];

        expect(dispatch.mock.calls.flat()).toEqual(expected);
    });  

    it("should post a review", async () => {

      const id = '123232412412', name = 'Kevin Mendez', comment = 'El mejor restaurante de todos';
  
      mockFetch.post.mockResolvedValue({                
        data: {     
          _id : '60f7638d43b2401d0e139cbe',
          name : "Kevin Mendez",
          comment : "This restaurant has the best buffet",
          restaurant : '60f760e42843ca1c38cbf73b',
          createdAt : '2021-07-21T00:00:13.037+00:00',
          __v : 0                 
        }
      });
          
      await ActionCreators.postReview(id, { name, comment })(dispatch);
      const expected = [
        {
          type: ActionTypes.POST_REVIEW_START,
        },
        {
          type: ActionTypes.POST_REVIEW_SUCCESS,
          payload: {     
            _id : '60f7638d43b2401d0e139cbe',
            name : "Kevin Mendez",
            comment : "This restaurant has the best buffet",
            restaurant : '60f760e42843ca1c38cbf73b',
            createdAt : '2021-07-21T00:00:13.037+00:00',
            __v : 0                 
          }
        },
      ];
  
      expect(dispatch.mock.calls.flat()).toEqual(expected);
      
    });

    it("should failed posting a review", async () => {

        const id = '123232412412', name = 'Kevin Mendez', comment = 'El mejor restaurante de todos';
    
        mockFetch.mockReturnValueOnce(
            Promise.reject({
                error: 'Something happen posting a review',
            })
        );
            
        await ActionCreators.postReview(id, { name, comment })(dispatch);
        const expected = [
          {
            type: ActionTypes.POST_REVIEW_START,
          },
          {
            type: ActionTypes.POST_REVIEW_FAILED,
            payload: 'Something happen posting a review'
          },
        ];
    
        expect(dispatch.mock.calls.flat()).toEqual(expected);
        
      });
    
});