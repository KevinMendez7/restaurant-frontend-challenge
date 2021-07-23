import styled from "styled-components";

const Footer = _ => {
    return (
        <CustomFooter>                    
            <Paragraph>
                Pagina de reseñas . creada para una prueba de React Js.
            </Paragraph>
            <Paragraph>
                Hecha con React. Kevin Mendez © 2021.
            </Paragraph>                            
        </CustomFooter>
    );
}

export const CustomFooter = styled.footer`
    background-color: #282c34;
    margin-top: 20px;
    padding: 30px 15px;    
    display: flex;
    text-align: center;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const Paragraph = styled.p`
    font-size: 15px;
`;

export default Footer;