import { shallow } from "enzyme";
import Body, { NoRestaurants, BodyContainer, RestaurantContainer, MainPicture, Name, LinkReview } from "./Body";
import Text from "./Text";

describe('<Body>', () => {

    let restaurants = [];

    const wrapper = shallow(<Body restaurants={restaurants} />);

    describe('Without restaurants', () => {
        
        it('Should has one BodyContainer', () => {
            const bodyContainer = wrapper.find(BodyContainer);
            expect(bodyContainer).toHaveLength(1);
        });

        it('Should has one NoRestaurants', () => {
            const noRestaurants = wrapper.find(NoRestaurants);
            expect(noRestaurants).toHaveLength(1);
        });

        it('NoRestaurants should has text', () => {
            const noRestaurantsText = wrapper.find(NoRestaurants).text();
            expect(noRestaurantsText).toBe('No encontramos restaurantes, lo sentimos');
        });

        it('Should has any RestaurantContainer, MainPicture, Name, LinkReview', () => {
            const restaurantContainer = wrapper.find(RestaurantContainer);
            const mainPicture = wrapper.find(MainPicture);
            const name = wrapper.find(Name);
            const linkReview = wrapper.find(LinkReview);
            expect(restaurantContainer).toHaveLength(0);
            expect(mainPicture).toHaveLength(0);
            expect(name).toHaveLength(0);
            expect(linkReview).toHaveLength(0);
        });
    });

    describe('With Restaurants', () => {

        restaurants = [{
            createdAt: "2021-07-21T02:06:10.733Z",
            description: "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.",
            main_picture: "https://www.bing.com/th?id=AMMS_7d98053c20116f8e95cacda509b61d7a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1",
            name: "Domino's Pizza",
            _id: '123SFA2ASDAS221131'
        }]

        beforeEach((done) => {
            try {
                wrapper.setProps({ restaurants });
                done();
            } catch (error) {
                done(error);
            }
        });

        it('Should has one BodyContainer', () => {
            const bodyContainer = wrapper.find(BodyContainer);
            expect(bodyContainer).toHaveLength(1);
        });

        it('Should not has NoRestaurants', () => {
            const noRestaurants = wrapper.find(NoRestaurants);
            expect(noRestaurants).toHaveLength(0);
        });

        it('Should has any RestaurantContainer, MainPicture, Name, LinkReview', () => {
            const restaurantContainer = wrapper.find(RestaurantContainer);
            const mainPicture = wrapper.find(MainPicture);
            const name = wrapper.find(Name);
            const text = wrapper.find(Text);
            const linkReview = wrapper.find(LinkReview);

            expect(restaurantContainer).toHaveLength(1);
            expect(mainPicture).toHaveLength(1);
            expect(name).toHaveLength(1);
            expect(text).toHaveLength(1);
            expect(linkReview).toHaveLength(1);
        });

        it('Should has alt attr in MainPicture', () => {            
            const mainPicture = wrapper.find(MainPicture).props();                        
            expect(mainPicture.alt).toBe('main_picture');

        });

        it('Should has src attr in MainPicture with url like restaurants[0] element', () => {            
            const mainPicture = wrapper.find(MainPicture).props();              
            expect(mainPicture.src).toBe(restaurants[0].main_picture);

        });

        it('Name should has text in like provided', () => {            
            const name = wrapper.find(Name).text();              
            expect(name).toBe(restaurants[0].name);

        });

        it('Text should has text in like provided and letters 100', () => {            
            const text = wrapper.find(Text).props();                       
            expect(text.text).toBe(restaurants[0].description);
            expect(text.letters).toBe(100);

        });

        it('LinkReview should has text ver mas...', () => {            
            const text = wrapper.find(LinkReview).text();                       
            expect(text).toBe('Ver mas...');            

        });

        it('LinkReview should has props to with path /restaurant/:id', () => {            
            const text = wrapper.find(LinkReview).props();                       
            expect(text.to).toStrictEqual({ pathname : `/restaurant/${restaurants[0]._id}` });            

        });
    });
    
});