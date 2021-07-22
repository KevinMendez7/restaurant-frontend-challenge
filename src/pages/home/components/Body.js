import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { specificSize } from '../../../utils/devicesSizeValidation';
import Text from './Text';

const Body = ({ restaurants }) => {
    return (
        <BodyContainer>
            { 
              restaurants.map(({ _id, main_picture, name, description}, index) => (
                <RestaurantContainer key={index}>
                  <MainPicture src={main_picture} alt='main_picture' />
                  <Name>{name}</Name>
                  <Text text={description} letters={100} />
                  <LinkReview 
                    to={
                      { 
                        pathname: `/restaurant/${_id}`                        
                      }
                    }
                  >Ver mas...</LinkReview>
                </RestaurantContainer>
              ))
            }
          </BodyContainer>
    );
}

const BodyContainer = styled.div`
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and ${specificSize.laptop} {
    
    
  }

  @media only screen and ${specificSize.tablet} {
    
  }

  @media only screen and ${specificSize.mobile} {
    justify-content: center;
    align-items: center;  
    flex-direction: column;
  }

`;

const RestaurantContainer = styled.div`

  background: #fff;
  display: flex;
  width: 20%;
  border-radius: 10px;
  margin: 20px 20px;
  padding: 100px 20px;
  flex-direction: column;

  @media only screen and ${specificSize.laptop} {
    width: 30%;
  }

  @media only screen and ${specificSize.tablet} {
    width: 40%;
    margin: 10px 10px;
  }

  @media only screen and ${specificSize.mobile} {
    width: 90%;
    margin: 10px 0;    
  }

`;

const MainPicture = styled.img`

  width: 20%;
  align-self: center;

  @media only screen and ${specificSize.laptop} {
   
  }

  @media only screen and ${specificSize.tablet} {
   
  }

  @media only screen and ${specificSize.mobile} {
    display: flex;
    margin: 0 auto;
  }

`;

const Name = styled.h2`
  text-align: center;
  color: #000;
`;

const LinkReview = styled(Link)`
  color: #ff9900;
  text-decoration: none;
  display: flex;
  flex-direction: row-reverse;
  margin-right: 20px;
  font-size: 17px;
  font-weight: 600;
`;

export default Body;