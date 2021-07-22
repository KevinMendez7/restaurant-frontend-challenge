import React from "react";
import { shallow } from "enzyme";
import { Link } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

describe('<NotFound>', () => {

    const wrapper = shallow(<NotFoundPage />);

    it('Should has one div', () => {
        const div = wrapper.find('div');
        expect(div).toHaveLength(1);
    });

    it('Should has one h4', () => {
        const h4 = wrapper.find('h4');
        expect(h4).toHaveLength(1);
    });

    it('h4 should has text 404 Page Not Found', () => {
        const text = wrapper.find('h4').text();        
        expect(text).toBe('404 Page Not Found');
    });

    it('Should has one <Link>', () => {
        const link = wrapper.find(Link);
        expect(link).toHaveLength(1);
    });

    it('Link should has text Go back to homepage', () => {
        const text = wrapper.find(Link).text();        
        expect(text).toBe('Go back to homepage');
    });

    it('Link should has anchor to /', () => {
        const { to : goTo } = wrapper.find(Link).props();                
        expect(goTo).toBe('/');
    });
});