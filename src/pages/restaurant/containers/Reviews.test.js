import React from "react";
import { mount, shallow } from "enzyme";
import { Provider, shallowEqual } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store';
import Reviews, { Title, ReviewContainer, Name, Paragraph, DateReview, Divider, NoReviews, CommentTitle } from "./Reviews";
import * as actions from '../../../_actions/Reviews.action';
import Form from '../components/Form';

// actions.fetchReviews = jest.fn(() => Promise.resolve({ ok: '' }));
// actions.postReview = jest.fn(() => Promise.resolve({ ok: '' }));

describe('<Reviews>', () => {
    
    let wrapper;

    beforeEach((done) => {
        try {
            const middlewares = [thunk];
            const store = configureMockStore(middlewares)(props);

            wrapper = mount(
                <Provider store={store}>
                    <Reviews {...props} />        
                </Provider>        
            )
            done();
        } catch(err) {
            done(err);
        }
    });

    const props = {    
        test:'dasd',                    
        reviews: {
            data: []
        }        
    }


    describe('No Reviews', () => {        

        it('Should has one Title, CommentTitle, Form, NoReviews,  components', () => {
            const title = wrapper.find(Title);
            const commentTitle = wrapper.find(CommentTitle);
            const form = wrapper.find(Form);
            const noReviews = wrapper.find(NoReviews);
            expect(title).toHaveLength(1);
            expect(noReviews).toHaveLength(1);
            expect(commentTitle).toHaveLength(1);
            expect(form).toHaveLength(1);
        });

        it('Should no has ReviewContainer, Name, Paragraph, DateReview, Divider components', () => {
            const reviewContainer = wrapper.find(ReviewContainer);
            const name = wrapper.find(Name);
            const paragraph = wrapper.find(Paragraph);
            const dateReview = wrapper.find(DateReview);
            const divider = wrapper.find(Divider);            
            expect(reviewContainer).toHaveLength(0);
            expect(name).toHaveLength(0);
            expect(paragraph).toHaveLength(0);
            expect(dateReview).toHaveLength(0);
            expect(divider).toHaveLength(0);
            
        });

        it('NoReviews Should has text Aun no hay comentarios del restaurante', () => {
            const noReviews = wrapper.find(NoReviews).text();
            expect(noReviews).toBe('Aun no hay comentarios del restaurante');
        });

        it('Title Should has text Comentarios', () => {
            const title = wrapper.find(Title).text();
            expect(title).toBe('Comentarios');
        });

        it('CommentTitle Should has text Comentarios', () => {
            const commentTitle = wrapper.find(CommentTitle).text();
            expect(commentTitle).toBe('ESCRIBIR NUEVO COMENTARIO');
        });        
        
    });

    describe('With Reviews', () => {  
        
        const props = {                
            reviews: {
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
        }

        const middlewares = [thunk];
        const store = configureMockStore(middlewares)(props);
    
        const wrapper = mount(
            <Provider store={store}>
                <Reviews {...props} />
            </Provider>
        );     

        it('Should not has NoReviews component', () => {
            const noReviews = wrapper.find(NoReviews);            
            expect(noReviews).toHaveLength(0);            
        });

        it('Should has ReviewContainer, Name, Paragraph, DateReview, Divider components', () => {
            const reviewContainer = wrapper.find(ReviewContainer);
            const name = wrapper.find(Name);
            const paragraph = wrapper.find(Paragraph);
            const dateReview = wrapper.find(DateReview);
            const divider = wrapper.find(Divider);            
            const p = wrapper.find('p');            
            expect(reviewContainer).toHaveLength(2);
            expect(p).toHaveLength(2);
            expect(name).toHaveLength(2);
            expect(paragraph).toHaveLength(4);
            expect(dateReview).toHaveLength(2);
            expect(divider).toHaveLength(2);
            
        });

        it('Name at review at position 1 Should has correct name and comment passed by props', () => {
            const review = wrapper.find(ReviewContainer).at(0)
            const name = review.find(Name).text();
            const comment = review.find(Paragraph).at(1).text();
            expect(name).toBe('Camilo Lizalde ');
            expect(comment).toBe('The best fast food ever!!!');
        });

        it('Name at review at position 2 Should has correct name and comment passed by props', () => {
            const review = wrapper.find(ReviewContainer).at(1)
            const name = review.find(Name).text();
            const comment = review.find(Paragraph).at(1).text();
            expect(name).toBe('Ronaldo Erbert ');
            expect(comment).toBe('The best fast food ever ever ever!!!');
        });
        

        // it('Should has img at position 1 url like sent in props', () => {
        //     const picturesImg = wrapper.find(PicturesImg).at(0).props();
        //     expect(picturesImg).toHaveProperty('alt', 'https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219133793_4508447765854436_4044760232232157000_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=2c4854&_nc_ohc=rh3SYP_8BkUAX9xu-Ht&_nc_ht=scontent.fgua5-1.fna&oh=444cfeac170663bd9966a2a33d75dac7&oe=60FCC1C8');            
        //     expect(picturesImg).toHaveProperty('src', 'https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219133793_4508447765854436_4044760232232157000_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=2c4854&_nc_ohc=rh3SYP_8BkUAX9xu-Ht&_nc_ht=scontent.fgua5-1.fna&oh=444cfeac170663bd9966a2a33d75dac7&oe=60FCC1C8');
        // });

        // it('Should has img at position 2 url like sent in props', () => {
        //     const picturesImg = wrapper.find(PicturesImg).at(1).props();
        //     expect(picturesImg).toHaveProperty('alt', 'https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219128205_4502329233132956_4939786019138836719_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=2c4854&_nc_ohc=dK1xs9Li1IUAX_sA_kT&_nc_ht=scontent.fgua5-1.fna&oh=dfc5efd4eda8abc7f95b549cf5a3fd23&oe=60FDD3D3');            
        //     expect(picturesImg).toHaveProperty('src', 'https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219128205_4502329233132956_4939786019138836719_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=2c4854&_nc_ohc=dK1xs9Li1IUAX_sA_kT&_nc_ht=scontent.fgua5-1.fna&oh=dfc5efd4eda8abc7f95b549cf5a3fd23&oe=60FDD3D3');
        // });
        
    });


});