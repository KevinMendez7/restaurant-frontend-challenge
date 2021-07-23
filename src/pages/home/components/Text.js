import styled from 'styled-components';

const Text = props => {
    return (
        <Description>{props.text.toString().substring(0, props.letters)}...</Description>
    );
}

export const Description = styled.p`
  text-align: center;  
`;

export default Text;