import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../_actions/Reviews.action';

class Reviews extends React.PureComponent {

  constructor() {
    super();

    this.state = {
      name: '',
      comment: ''
    };

    this.submitReview = this.submitReview.bind(this);
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

    componentDidMount() {        
      this.props.actions.fetchReviews(this.props.id);        
    }

    render() {         
        return (
            <>
                <h3>Comentarios</h3>
                <h3>ESCRIBIR NUEVO COMENTARIO</h3>
                {
                  this.props.reviews.length > 0
                  ? this.props.reviews.map(({ name, comment, createdAt }, index) => {                  
                    const date = new Date(createdAt);
                    return (
                      <div key={index}>
                        <p><span>{name}</span> el <span>{`${date.getDate()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`}</span></p>
                        <p>{comment}</p>
                      </div>
                    )})
                  : <h3>No comments</h3>
                }
                <form onSubmit={this.submitReview}>
                  <label>
                    Nombre:
                    <input type="text" value={this.state.name} required minLength='5' name="name" onChange={(e) => this.setState({ name : e.target.value})}/>
                  </label>
                  <label>
                    Comentario:
                    <input type="text" value={this.state.comment} required minLength='10' name="comment" onChange={(e) => this.setState({ comment : e.target.value})}/>
                  </label>
                  <button type='submit'>Enviar</button>
                </form>   
            </>
        );
    };
}

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