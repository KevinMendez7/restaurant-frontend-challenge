import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../_actions/Restaurant.action'
import styled from 'styled-components';
import { specificSize } from '../../../utils/devicesSizeValidation';
import Pictures from './Pictures';
import Reviews from './Reviews';

class Restaurant extends React.Component  {
   
    componentDidMount() {
      window.scrollTo(0, 0);
      this.props.actions.fetchRestaurantById(this.props.match.params.id);      
    }

    componentWillUnmount() {    
      this.props.actions.restartData();
    }
  
    render() {      
      const { match : { params : { id } }, loading, restaurant : { restaurant }} = this.props;      
      return (
        <div>
          {
            loading 
            ? <p>...loading</p>      
            : <Container>
                <ImageTitleContainer>
                  <Image src={restaurant.main_picture} alt={restaurant.main_picture}/>
                  <Title>{restaurant.name}</Title>
                </ImageTitleContainer>
                <Description>{restaurant.description}</Description>
                <Pictures id={id} />
                <Reviews id={id} />                           
              </Container> 
          }
        </div>
      );  
    };
};

const Container = styled.div`

  padding: 40px 180px;

  @media only screen and ${specificSize.laptop} {
    padding: 40px 80px;
  }

  @media only screen and ${specificSize.tablet} {
    padding: 40px 80px;
  }

  @media only screen and ${specificSize.mobile} {
    padding: 10px;
  }
`;

const ImageTitleContainer = styled.div`

  display: flex;
  flex-direction: row;

  @media only screen and ${specificSize.tablet} {
    flex-direction: column;
  }

  @media only screen and ${specificSize.mobile} {
    flex-direction: column;
  }

`;

const Image = styled.img`

  width: 25%;

  @media only screen and ${specificSize.laptop} {
    width: 20%;
    
  }

  @media only screen and ${specificSize.tablet} {
    width: 30%;
  }

  @media only screen and ${specificSize.mobile} {
    width: 35%;
  }
`;

const Title = styled.h1`
  margin-left: 5%;
  font-size: 80px;
  padding-top: 5%;

  @media only screen and ${specificSize.laptop} {
    padding-top: 5%;
    margin-left: 8%;
    font-size: 70px;
  }

  @media only screen and ${specificSize.tablet} {
    font-size: 45px;
    margin-left: 0;
    margin-top: 10px;
    padding-top: 5%;
    margin-bottom: 10px;
  }

  @media only screen and ${specificSize.mobile} {    
    font-size: 25px;
    margin-left: 0;
    padding-top: 5%;
    margin-bottom: 10px;
  }
`;

const Description = styled.p`  

  font-size: 22px;

  @media only screen and ${specificSize.laptop} {
    
  }

  @media only screen and ${specificSize.tablet} {
    font-size: 20px;
  }

  @media only screen and ${specificSize.mobile} {
    font-size: 14px;
    margin-bottom: 30px;
  }
`;
  
Restaurant.protoTypes = {
// name : PropTypes.string.isRequired,
// description: PropTypes.string.isRequired,  
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const mapStateToProps = state => {
  return {
    restaurant: state.restaurant
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);

