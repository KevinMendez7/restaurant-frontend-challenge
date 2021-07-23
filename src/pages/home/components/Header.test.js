import { shallow } from "enzyme";
import Header, { CustomHeader, Title, Paragraph } from "./Header";

describe('<Header>', () => {

    const wrapper = shallow(<Header />);
    
    it('Should has one CustomHeader', () => {
        const customHeader = wrapper.find(CustomHeader);
        expect(customHeader).toHaveLength(1);
    });

    it('Should has one Paragraph', () => {
        const paragraph = wrapper.find(Paragraph);
        expect(paragraph).toHaveLength(1);
    });

    it('Should has one Title', () => {
        const title = wrapper.find(Title);
        expect(title).toHaveLength(1);
    });

    it('Should has a Title with text "Reseñas de Restaurantes"', () => {
        const title = wrapper.find(Title).text();
        expect(title).toBe('Reseñas de Restaurantes');
    });

    it(`Should has one Paragraph with text 
        "Bienvenido a nuestra pagina de reseñas, 
        aqui puedes encontrar los comentarios de la gente, 
        fotos y descripción del restaurante"`, () => {
        const paragraph = wrapper.find(Paragraph).text();
        expect(paragraph).toBe(`Bienvenido a nuestra pagina de reseñas, aqui puedes encontrar los comentarios de la gente, fotos y descripción del restaurante`);
    });

    describe('<CustomHeader>', () => {
        const wrapper = shallow(<CustomHeader />);        
        it('CustomHeader should has header tag', () => {
            const customFooter = wrapper.find('header');
            expect(customFooter).toHaveLength(1);
        });

        it('CustomHeader should has class sc-bdnxRM lgaJtS', () => {            
            const clasName = wrapper.hasClass('sc-bdnxRM lgaJtS');            
            expect(clasName).toBeTruthy();
        });
    });

    describe('<Title>', () => {
        const wrapper = shallow(<Title />);        
        it('Should has one Title', () => {
            const title = wrapper.find('h1');
            expect(title).toHaveLength(1);
        });
        
        it('Title should has class sc-gtsrHT kSuIDd', () => {
            const customFooter = wrapper.hasClass('sc-gtsrHT kSuIDd');
            expect(customFooter).toBeTruthy();
        });
    });

    describe('<Paragraph>', () => {
        const wrapper = shallow(<Paragraph />);        
        it('Should has one Paragraph', () => {
            const paragraph = wrapper.find('p');
            expect(paragraph).toHaveLength(1);
        });
        
        it('Paragraph should has class sc-dlnjwi eHfreH', () => {
            const customFooter = wrapper.hasClass('sc-dlnjwi eHfreH');
            expect(customFooter).toBeTruthy();
        });
    });    

});