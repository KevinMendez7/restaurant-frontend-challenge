import React from "react";
import { shallow } from "enzyme";
import GlobalWrapper, { GlobalStyle } from './GlobalWrapper';

describe('<GlobalWrapper />', () => {

    const wrapper = shallow(<GlobalWrapper />);
    
    it('Should has one <React.Fragment />', () => {
        const fragment = wrapper.find('Fragment');
        expect(fragment).toHaveLength(1);
    });

    it('Should has one <GlobalStyle />', () => {
        const globalStyle = wrapper.find(GlobalStyle);
        expect(globalStyle).toHaveLength(1);
    });
});