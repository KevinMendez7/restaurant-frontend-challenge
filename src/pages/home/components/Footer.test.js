import { shallow } from "enzyme";
import Footer, { CustomFooter, Paragraph } from "./Footer";

describe('<Footer>', () => {

    const wrapper = shallow(<Footer />);
    
    it('Should has one CustomFooter', () => {
        const customFooter = wrapper.find(CustomFooter);
        expect(customFooter).toHaveLength(1);
    });

    it('Should has one Paragraph', () => {
        const paragraph = wrapper.find(Paragraph);
        expect(paragraph).toHaveLength(2);
    });

    it('Should has one Paragraph with text "Pagina de reseñas . creada para una prueba de React Js."', () => {
        const paragraph = wrapper.find(Paragraph).at(0).text();
        expect(paragraph).toBe('Pagina de reseñas . creada para una prueba de React Js.');
    });

    it('Should has one Paragraph with text "Hecha con React. Kevin Mendez © 2021."', () => {
        const paragraph = wrapper.find(Paragraph).at(1).text();
        expect(paragraph).toBe('Hecha con React. Kevin Mendez © 2021.');
    });

    describe('<CustomFooter>', () => {
        const wrapper = shallow(<CustomFooter />);
        
        it('CustomFooter should has header tag', () => {
            const customFooter = wrapper.find('footer');
            expect(customFooter).toHaveLength(1);
        });

        it('CustomFooter should has class sc-bdnxRM dEhTyX', () => {            
            const clasName = wrapper.hasClass('sc-bdnxRM dEhTyX');            
            expect(clasName).toBeTruthy();
        });
    });

    describe('<Paragraph>', () => {
        const wrapper = shallow(<Paragraph />);        
        it('Should has one Paragraph', () => {
            const paragraph = wrapper.find('p');
            expect(paragraph).toHaveLength(1);
        });

        it('Paragraph should has class sc-gtsrHT cZmrxk', () => {
            const customFooter = wrapper.hasClass('sc-gtsrHT cZmrxk');
            expect(customFooter).toBeTruthy();
        });
    });    

});