import styled from "styled-components";

const Header = _ => {
    return (
        <CustomHeader>          
            <Title>Restaurant Reviews</Title>
            <Paragraph>Description of the page</Paragraph>
          </CustomHeader>
    );
};

const CustomHeader = styled.header`
    background-color: #282c34;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Title = styled.h1`
`;

const Paragraph = styled.p`
`;

export default Header;