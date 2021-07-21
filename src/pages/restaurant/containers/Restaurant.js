import React from 'react';
import Pictures from './Pictures';
import Reviews from './Reviews';

class Restaurant extends React.Component  {

    constructor(props) {
      super(props);
      this.state = {
        restaurant: null,
        pictures: [],
        loading: true
      };
    }
   
    componentDidMount() {      
      fetch(`http://localhost:4000/restaurant/${this.props.match.params.id}`).then(resp => {      
        resp.json().then((res) => {                              
          this.setState({
            restaurant : res,
            loading: false
          });
        })
      }).catch(err => {
        console.error(err)
      }); 
    }
  
    render() {
      return (
        <div>
          {
            this.state.loading 
            ? <p>...loading</p>      
            : <>
                <h1>{this.state.restaurant.name}</h1>
                <p>{this.state.restaurant.description}</p>
                <Pictures id={this.props.match.params.id} />
                <Reviews id={this.props.match.params.id} />                           
              </> 
          }
        </div>
      );  
    };
};
  
Restaurant.protoTypes = {
// name : PropTypes.string.isRequired,
// description: PropTypes.string.isRequired,  
}

export default Restaurant;

