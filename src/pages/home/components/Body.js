import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Name = styled.h2`
    color: #000
`;

const Body = ({ restaurants }) => {
    return (
        <div>
            { 
              restaurants.map(({ _id, main_picture, name, description}, index) => (
                <div key={index}>
                  <img src={main_picture} alt='main_picture' />
                  <Name>{name}</Name>
                  <p>{description}</p>
                  <Link 
                    to={
                      { 
                        pathname: `/restaurant/${_id}`, 
                        restaurant : { name, description }
                      }
                    }
                  >Ver mas</Link>
                </div>
              ))
            }
          </div>
    );
}

export default Body;