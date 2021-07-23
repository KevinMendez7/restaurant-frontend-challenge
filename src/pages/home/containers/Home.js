import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../_actions/Restaurant.action'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';
import Container from '../components/Container';
import GlobalWrapper from '../components/GlobalWrapper';

export class Home extends React.Component {     
  
    componentDidMount() {      
      this.props.actions.fetchRestaurants();      
    }
  
    render() {            
      const { restaurants } = this.props;
      
      return (
        <GlobalWrapper>
          <Container>
            <Header />
            <Body restaurants={restaurants} />
            <Footer />          
          </Container>
        </GlobalWrapper>
      );
    }
  }

  

  const mapDispatchToProps = dispatch => {
    return {  
      actions: bindActionCreators(actions, dispatch)
    };
  }

  const mapStateToProps = state => {
    return {
      restaurants: state.restaurant.data
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Home);