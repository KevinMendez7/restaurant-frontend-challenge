import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store';
import Restaurant, { Container, ImageTitleContainer, Image, Title, Description } from "./Restaurant";
import Pictures from "./Pictures";
import Reviews from "./Reviews";

describe('<Restaurant>', () => {

    const props = {        
        match: {params: { id : 'KASHDK1231231'}},
        actions : {
            restartData : jest.fn(),
            fetchRestaurants: jest.fn(),
            fetchRestaurantById : jest.fn()
        },
        loading: true,
        pictures: {
            data: []
        },
        reviews: {
            data: []
        },
        restaurant : {
            loading: false,
            data : [],
            restaurant: {}
        },
    }

    const middlewares = [thunk];
    const store = configureMockStore(middlewares)(props);

    const wrapper = mount(
        <Provider store={store}>
            <Restaurant {...props} />
        </Provider>
    )

    describe('loading restaurants', () => {        

        it('Should has one p tag', () => {
            const loading = wrapper.find('p');
            expect(loading).toHaveLength(1);
        });
    
        it('Should has one p with text ...loading', () => {
            const loading = wrapper.find('p').text();
            expect(loading).toBe('...loading');
        });
    
        it('Should not has Container, ImageTitleContainer, Image, Title, Description, Pictures and Reviews when loading', () => {
            const container = wrapper.find(Container);
            const imageTitleContainer = wrapper.find(ImageTitleContainer);
            const image = wrapper.find(Image);
            const title = wrapper.find(Title);
            const description = wrapper.find(Description);
            const pictures = wrapper.find(Pictures);
            const reviews = wrapper.find(Reviews);
            expect(container).toHaveLength(0);
            expect(imageTitleContainer).toHaveLength(0);
            expect(image).toHaveLength(0);
            expect(title).toHaveLength(0);
            expect(description).toHaveLength(0);
            expect(pictures).toHaveLength(0);
            expect(reviews).toHaveLength(0);
        });
    });

    describe('Restaurants loaded', () => {

        const props = {        
            match: {params: { id : '60f875f5f6903c6c33fa8382'}},
            actions : {
                restartData : jest.fn(),
                fetchRestaurants: jest.fn(),
                fetchRestaurantById : jest.fn()
            },
            loading: false,
            pictures: {
                data: []
            },
            reviews: {
                data: []
            },
            restaurant : {
                loading: false,
                data : [],
                restaurant: {
                    createdAt: "2021-07-21T02:06:10.733Z",
                    description: "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.",
                    main_picture: "https://www.bing.com/th?id=AMMS_7d98053c20116f8e95cacda509b61d7a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1",
                    name: "Domino's Pizza",
                    pictures: [],
                    reviews: []
                }
            },
        }
    
        const middlewares = [thunk];
        const store = configureMockStore(middlewares)(props);
    
        const wrapper = mount(
            <Provider store={store}>
                <Restaurant {...props} />
            </Provider>
        );        

        it('Should no has a p tag', () => {
            const loading = wrapper.find('p');
            // expect(loading).toHaveLength(0);
        });

    
        it('Should has Container, ImageTitleContainer, Image, Title, Description when loading', () => {
            const container = wrapper.find(Container);
            const imageTitleContainer = wrapper.find(ImageTitleContainer);
            const image = wrapper.find(Image);
            const title = wrapper.find(Title);
            const description = wrapper.find(Description);            
            const pictures = wrapper.find(Pictures);
            const reviews = wrapper.find(Reviews);
            expect(container).toHaveLength(1);
            expect(imageTitleContainer).toHaveLength(1);
            expect(image).toHaveLength(1);
            expect(title).toHaveLength(1);
            expect(description).toHaveLength(1);
            expect(pictures).toHaveLength(1);
            expect(reviews).toHaveLength(1);
            
        });

        it('Should has img with url and alt properties like restaurant prop sent', () => {
            const image = wrapper.find(Image).props();            
            expect(image).toHaveProperty('src', props.restaurant.restaurant.main_picture);
            expect(image).toHaveProperty('alt', props.restaurant.restaurant.main_picture);
        });
        
        it('Should has name like restaurant prop sent', () => {
            const title = wrapper.find(Title).text();            
            expect(title).toBe(props.restaurant.restaurant.name);
        });
        
        it('Should has description like restaurant prop sent', () => {
            const description = wrapper.find(Description).text();            
            expect(description).toBe(props.restaurant.restaurant.description);
        });

        it('Should has Pictures with id prop like restaurant prop sent', () => {
            const pictures = wrapper.find(Pictures).props();            
            expect(pictures).toHaveProperty('id', props.match.params.id);
        });

        it('Should has Reviews with id prop like restaurant prop sent', () => {
            const reviews = wrapper.find(Reviews).props();            
            expect(reviews).toHaveProperty('id', props.match.params.id);
        });
        
    });


});