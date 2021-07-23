import { shallow } from "enzyme";
import Text, { Description } from "./Text";

describe('<Text>', () => {
    
    const letters = 100;
    const text = `
    McDonald's Corporation is an American fast food company, 
    founded in 1940 as a restaurant operated by Richard and Maurice McDonald, 
    in San Bernardino, California, United States. 
    They rechristened their business as a hamburger stand, 
    and later turned the company into a franchise, 
    with the Golden Arches logo being introduced in 1953 at a location in Phoenix, Arizona. 
    In 1955, Ray Kroc, a businessman, joined the company as a franchise agent and 
    proceeded to purchase the chain from the McDonald brothers. 
    McDonald's had its previous headquarters in Oak Brook, 
    Illinois, but moved its global headquarters to Chicago in June 2018.`;

    const wrapper = shallow(<Text text={text} letters={letters} />);
    
    it('Should has one Description', () => {
        const description = wrapper.find(Description);
        expect(description).toHaveLength(1);
    });


    it('Should has a description as text variable with substring of letters', () => {
        const title = wrapper.find(Description).text();
        expect(title).toBe(`${text.toString().substring(0, letters)}...`);
    });    

    describe('<Description>', () => {
        const wrapper = shallow(<Description />);        
        it('Description should has p tag', () => {
            const customFooter = wrapper.find('p');
            expect(customFooter).toHaveLength(1);
        });
        
        it('Description should has class sc-bdnxRM bGLjTs', () => {            
            const clasName = wrapper.hasClass('sc-bdnxRM bGLjTs');            
            expect(clasName).toBeTruthy();
        });
    });

});