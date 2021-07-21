import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';

class Home extends React.Component {
    constructor(props) {
      super();
      this.state = {
        restaurants: []
      };
    }
  
    componentDidMount() {
      fetch('http://localhost:4000/restaurant').then(resp => {      
        resp.json().then(res => {
          this.setState({
            restaurants : res
          });
          // console.log(res);
        })
      }).catch(err => {
        console.error(err)
      }); 
    }
  
    render() {        
      return (
        <div className="App">
          <Header />
          <Body restaurants={this.state.restaurants} />
          <Footer />          
        </div>
      );
    }
  }

  export default Home;