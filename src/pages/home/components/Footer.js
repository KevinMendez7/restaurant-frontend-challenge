import styled from "styled-components";

const Footer = _ => {
    return (
        <CustomFooter>                    
            <Paragraph>Footer</Paragraph>
        </CustomFooter>
    );
}

const CustomFooter = styled.header`
    background-color: #282c34;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Paragraph = styled.p`
`;

export default Footer;