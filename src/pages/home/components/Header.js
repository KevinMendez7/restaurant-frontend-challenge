import styled from "styled-components";

const Header = _ => {
    return (
        <CustomHeader>          
            <Title>Reseñas de Restaurantes</Title>
            <Paragraph>
                Bienvenido a nuestra pagina de reseñas, 
                aqui puedes encontrar los comentarios de la gente, 
                fotos y descripción del restaurante</Paragraph>
          </CustomHeader>
    );
};

export const CustomHeader = styled.header`
    background-color: #282c34;
    margin-bottom: 20px;
    padding: 30px 15px;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Paragraph = styled.p`
    text-align: center;
    font-size: 20px;
`;

export default Header;