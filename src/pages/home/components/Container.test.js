import { shallow } from "enzyme";
import Container from "./Container";

describe('<Container />', () => {

    const wrapper = shallow(<Container />)

    it('Should has a <div> tag', () => {
        const div = wrapper.find('div');
        expect(div).toHaveLength(1);
    });

    it('Should has clasname sc-bdnxRM btqkbW', () => {
        const className = wrapper.hasClass('sc-bdnxRM btqkbW');
        expect(className).toBeTruthy()
    });
});