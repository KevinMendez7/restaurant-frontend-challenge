import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../_actions/Reviews.action';
import styled from 'styled-components';
import { specificSize } from '../../../utils/devicesSizeValidation';
import Form from '../components/Form';

class Reviews extends React.PureComponent {

  constructor() {
    super();

    this.state = {
      name: '',
      comment: ''
    };

    this.submitReview = this.submitReview.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
  }

  submitReview(e) {
    e.preventDefault();
    const { name, comment } = this.state;      
    this.setState({
      name: '',
      comment: ''
    });

    this.props.actions.postReview(this.props.id, { name, comment });    
  }

  onChangeName(e) {
    this.setState({ name : e.target.value});
  }

  onChangeComment(e) {
    this.setState({ comment : e.target.value});
  }

  componentDidMount() {        
    this.props.actions.fetchReviews(this.props.id);        
  }

  componentWillUnmount() {    
    this.props.actions.restartData();
  }

  render() {         
    return (
      <>
        <Title>Comentarios</Title>                
        {
          this.props.reviews.length > 0
          ? this.props.reviews.map(({ name, comment, createdAt }, index) => {                  
              const date = new Date(createdAt);
              return (
                <ReviewContainer key={index}>
                  <p>
                    <Name>{name} </Name> <Paragraph>el </Paragraph> <DateReview>{`${date.getDate()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`}</DateReview>
                  </p>
                  <Paragraph>{comment}</Paragraph>
                  <Divider />
                </ReviewContainer>
              )})
          : <NoReviews>Aun no hay comentarios del restaurante</NoReviews>
        }
        <CommentTitle>ESCRIBIR NUEVO COMENTARIO</CommentTitle>
        <Form 
          submitReview={this.submitReview} 
          onChangeName={this.onChangeName}
          onChangeComment={this.onChangeComment}
          name={this.state.name}
          comment={this.state.comment}
        />   
      </>
    );
  };
}

const ReviewContainer = styled.div`
  // padding: 30px 0;
`;

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

const Name = styled.span`
  color: #ff9900;
  font-size: 25px;
  font-weight: bold;

  @media only screen and ${specificSize.laptop} {
    font-size: 22px;
    
  }

  @media only screen and ${specificSize.tablet} {
    font-size: 18px;
    
  }

  @media only screen and ${specificSize.mobile} {
    font-size: 15px;    
  }  
`; 

const DateReview = styled.span`  

  font-weight: bold;
  font-size: 24px;  

  @media only screen and ${specificSize.laptop} {
    font-size: 21px;
    
  }

  @media only screen and ${specificSize.tablet} {
    font-size: 16.5px;
    
  }

  @media only screen and ${specificSize.mobile} {
    font-size: 15px;    
  }    
`; 

const Paragraph = styled.span`    

  font-size: 24px;

  @media only screen and ${specificSize.laptop} {
    font-size: 21px;
    
  }

  @media only screen and ${specificSize.tablet} {
    font-size: 17px;
    
  }

  @media only screen and ${specificSize.mobile} {
    font-size: 15px;    
  }    
`; 

const Divider = styled.hr`  
  border-color: #00000061;
  margin-top: 40px;
  margin-bottom: 20px;

  @media only screen and ${specificSize.laptop} {
    margin-top: 40px;
  }

  @media only screen and ${specificSize.tablet} {
    margin-top: 30px;
  }

  @media only screen and ${specificSize.mobile} {
    margin-top: 10px;
  }
`; 

const CommentTitle = styled.h3`
  color: #ff9900;
  margin-top: 80px;
  margin-bottom: 20px;
  font-size: 30px;

  @media only screen and ${specificSize.laptop} {
    padding-top: 30px;
    font-size: 30px;  
  }

  @media only screen and ${specificSize.tablet} {
    padding-top: 30px;
    font-size: 26px;    
  }

  @media only screen and ${specificSize.mobile} {
    padding-top: 30px;
    font-size: 16px;
  }

`; 

const NoReviews = styled.h2`

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
    reviews: state.reviews.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);