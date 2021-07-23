import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Home from './Home';
import GlobalWrapper from "../components/GlobalWrapper";
import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

describe('<Home>', () =>{        

    const restaurant = {
        loading: false,
        data : [],
        restaurant: {}    
    }    

    const props = { 
        restaurant : {
            loading: false,
            data : [],
            restaurant: {}    
        }
    }

    let component;

    beforeEach((done) => {
        try {
            const middlewares = [thunk];
            const store = configureMockStore(middlewares)(props);

            component = mount(
                <Provider store={store}>
                    <Home {...props} />        
                </Provider>        
            )
            done();
        } catch(err) {
            done(err);
        }
    });

    // const middlewares = [thunk];
    // const store = configureMockStore(middlewares)({restaurant});
    //     const component = mount(        
    //         <Provider store={store}>
    //             <Home />
    //         </Provider>
    //     );        

    it('Should has one GlobalWrapper', () => {                
        const globalWrapper = component.find(GlobalWrapper);        
        expect(globalWrapper).toHaveLength(1)        
    });

    it('Should has one Container', () => {                
        const container = component.find(Container);        
        expect(container).toHaveLength(1)        
    });
    it('Should has one Header', () => {                
        const header = component.find(Header);        
        expect(header).toHaveLength(1)        
    });
    it('Should has one Footer', () => {                
        const footer = component.find(Footer);        
        expect(footer).toHaveLength(1)        
    });
    it('Should has one Body', () => {                
        const body = component.find(Body);        
        expect(body).toHaveLength(1)        
    });
});