import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../../../_actions/Pictures.action';
import { specificSize } from '../../../utils/devicesSizeValidation';

class Pictures extends React.PureComponent {

  componentDidMount() {           
    this.props.actions.fetchPictures(this.props.id);        
  }

  componentWillUnmount() {    
    this.props.actions.restartData();
  }
 
  render() {
    const { pictures } = this.props;
    return (
      <>
        <Title>Fotografias</Title>
        <PicturesContainer pictures={pictures}>
        {
          pictures.length > 0
          ? pictures.map((picture, index) => (
            <React.Fragment key={index}>
              <PicturesImg src={picture.url} alt={picture.url} onClick={(e) => e.target.webkitRequestFullScreen()} />
            </React.Fragment>
          ))                
          : <NoPictures>Aun no hay fotografias del restaurante</NoPictures>
        }
        </PicturesContainer>
      </>
    );
  }
}

const Title = styled.h3`
  color: #ff9900;
  font-size: 50px;
  
  @media only screen and ${specificSize.laptop} {
    font-size: 40px;
    
  }

  @media only screen and ${specificSize.tablet} {
    font-size: 30px;
    
  }

  @media only screen and ${specificSize.mobile} {
    font-size: 25px;
  }
`;

const PicturesContainer = styled.div`

  display: flex;
  margin: auto;
  width: 100%;
  overflow: ${props => props.pictures.length > 0 ? 'scroll' : 'hidden'};

  @media only screen and ${specificSize.laptop} {
    
  }

  @media only screen and ${specificSize.tablet} {
    
  }

  @media only screen and ${specificSize.mobile} {
    
  }

`;

const PicturesImg = styled.img`

  margin-left: 20px;
  margin-right: 20px;
  width: 40%;

  @media only screen and ${specificSize.laptop} {
    width: 36%;
  }

  @media only screen and ${specificSize.tablet} {
    
  }

  @media only screen and ${specificSize.mobile} {
    margin-left: 5px;
    margin-right: 5px;
    width: 30%;
  }
`;

const NoPictures = styled.h2`

  font-weight: normal;

  @media only screen and ${specificSize.laptop} {
    width: 36%;
  }

  @media only screen and ${specificSize.tablet} {
    
  }

  @media only screen and ${specificSize.mobile} {
    font-size: 17px;
  }
  
`;



const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
  
  const mapStateToProps = state => {      
    return {
      pictures: state.pictures.data
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Pictures);