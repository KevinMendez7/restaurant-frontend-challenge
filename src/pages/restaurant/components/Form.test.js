import { shallow } from "enzyme";
import Form, { CustomForm, Label, InputName, InputComment, Button } from "./Form";

describe('<Form>', () => {

    const props = {        
        submitReview: jest.fn(), 
        onChangeName: jest.fn(), 
        onChangeComment: jest.fn(), 
        name: '', 
        comment: '',
        
    }

    const wrapper = shallow(        
        <Form {...props} />        
    )

    it('Should has CustomForm, Label, InputName, InputComment, Button components', () => {
        const customForm = wrapper.find(CustomForm);
        const label = wrapper.find(Label);
        const inputName = wrapper.find(InputName);
        const inputComment = wrapper.find(InputComment);
        const button = wrapper.find(Button);

        expect(customForm).toHaveLength(1);
        expect(label).toHaveLength(2);
        expect(inputName).toHaveLength(1);
        expect(inputComment).toHaveLength(1);
        expect(button).toHaveLength(1);
    });

    it('Label at position 1 Should has Nombre: as text', () => {
        const label = wrapper.find(Label).at(0).text();
        expect(label).toBe('Nombre:');
    });

    it('Label at position 2 Should has Nombre: as text', () => {
        const label = wrapper.find(Label).at(1).text();
        expect(label).toBe('Comentario:');
    });

    it('InputName Should has props', () => {
        const inputName = wrapper.find(InputName).props();
        expect(inputName).toHaveProperty('minLength','5');
        expect(inputName).toHaveProperty('name','name');
        expect(inputName).toHaveProperty('onChange', props.onChangeName);
        expect(inputName).toHaveProperty('required', true);
        expect(inputName).toHaveProperty('type', 'text');
    });

    it('InputComment Should has props', () => {
        const inputComment = wrapper.find(InputComment).props();
        expect(inputComment).toHaveProperty('minLength','10');
        expect(inputComment).toHaveProperty('name','comment');
        expect(inputComment).toHaveProperty('onChange', props.onChangeComment);
        expect(inputComment).toHaveProperty('required', true);
        expect(inputComment).toHaveProperty('type', 'text');
    });

    it('Button Should has text Enviar', () => {
        const button = wrapper.find(Button).text();
        expect(button).toBe('Enviar');        
    });

    it('Button Should has props', () => {
        const button = wrapper.find(Button).props();
        expect(button).toHaveProperty('type', 'submit');
    });

});
