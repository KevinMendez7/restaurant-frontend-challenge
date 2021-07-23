import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store';
import Pictures, { Title, PicturesContainer, PicturesImg, NoPictures } from "./Pictures";

describe('<Pictures>', () => {

    let wrapper;

    beforeEach((done) => {
        try {
            const middlewares = [thunk];
            const store = configureMockStore(middlewares)(props);

            wrapper = mount(
                <Provider store={store}>
                    <Pictures {...props} />        
                </Provider>        
            )
            done();
        } catch(err) {
            done(err);
        }
        
    });

    const props = {     
        id: '60f875f5f6903c6c33fa8382',           
        pictures: {
            data: []
        }        
    }

    // const middlewares = [thunk];
    // const store = configureMockStore(middlewares)(props);

    // const wrapper = mount(
    //     <Provider store={store}>
    //         <Pictures {...props} />
    //     </Provider>
    // )

    describe('No pictures', () => {        

        it('Should has one Title, PicturesContainer, NoPictures tag', () => {
            const noPictures = wrapper.find(NoPictures);
            const title = wrapper.find(Title);
            const picturesContainer = wrapper.find(PicturesContainer);
            expect(noPictures).toHaveLength(1);
            expect(title).toHaveLength(1);
            expect(picturesContainer).toHaveLength(1);
        });

        it('NoPictures Should has text Aun no hay fotografias del restaurante', () => {
            const noPictures = wrapper.find(NoPictures).text();
            expect(noPictures).toBe('Aun no hay fotografias del restaurante');
        });

        it('picturesContainer Should has props pictures with empty array', () => {
            const picturesContainer = wrapper.find(PicturesContainer).props();            
            expect(picturesContainer).toHaveProperty('pictures', []);
        });
        
    });

    describe('With pictures', () => {  
        
        const props = {                
            pictures: {
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
            }        
        }

        beforeEach((done) => {
            try {
                const middlewares = [thunk];
                const store = configureMockStore(middlewares)(props);
    
                wrapper = mount(
                    <Provider store={store}>
                        <Pictures {...props} />        
                    </Provider>        
                )
                done();
            } catch(err) {
                done(err);
            }
        });          

        it('Should not has NoPictures component', () => {
            const noPictures = wrapper.find(NoPictures);            
            expect(noPictures).toHaveLength(0);            
        });

        it('Should has one Title, PicturesContainer, Fragment, PicturesImg tag', () => {                    
            const title = wrapper.find(Title);
            const picturesContainer = wrapper.find(PicturesContainer);
            const picturesImg = wrapper.find(PicturesImg);        
            expect(title).toHaveLength(1);
            expect(picturesContainer).toHaveLength(1);
            expect(picturesImg).toHaveLength(2);
        });

        it('Title Should has text Fotografias', () => {
            const title = wrapper.find(Title).text();
            expect(title).toBe('Fotografias');
        });

        it('Should has img at position 1 url like sent in props', () => {
            const picturesImg = wrapper.find(PicturesImg).at(0).props();
            expect(picturesImg).toHaveProperty('alt', 'https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219133793_4508447765854436_4044760232232157000_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=2c4854&_nc_ohc=rh3SYP_8BkUAX9xu-Ht&_nc_ht=scontent.fgua5-1.fna&oh=444cfeac170663bd9966a2a33d75dac7&oe=60FCC1C8');            
            expect(picturesImg).toHaveProperty('src', 'https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219133793_4508447765854436_4044760232232157000_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=2c4854&_nc_ohc=rh3SYP_8BkUAX9xu-Ht&_nc_ht=scontent.fgua5-1.fna&oh=444cfeac170663bd9966a2a33d75dac7&oe=60FCC1C8');
        });

        it('Should has img at position 2 url like sent in props', () => {
            const picturesImg = wrapper.find(PicturesImg).at(1).props();
            expect(picturesImg).toHaveProperty('alt', 'https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219128205_4502329233132956_4939786019138836719_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=2c4854&_nc_ohc=dK1xs9Li1IUAX_sA_kT&_nc_ht=scontent.fgua5-1.fna&oh=dfc5efd4eda8abc7f95b549cf5a3fd23&oe=60FDD3D3');            
            expect(picturesImg).toHaveProperty('src', 'https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/219128205_4502329233132956_4939786019138836719_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=2c4854&_nc_ohc=dK1xs9Li1IUAX_sA_kT&_nc_ht=scontent.fgua5-1.fna&oh=dfc5efd4eda8abc7f95b549cf5a3fd23&oe=60FDD3D3');
        });
        
    });


});