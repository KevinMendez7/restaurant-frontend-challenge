import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {  

  render() {    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Page} />
          <Route exact path="/restaurant/:id" component={Restaurant} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>      
    );
  }
}

class Page extends React.Component {
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
    const Name = styled.h2`
      color: #000
    `;

    return (
      <div className="App">
        <header className="App-header">          
          <h1>Restaurant Reviews</h1>
          <p>Description of the page</p>
        </header>
        <div>
          { 
            this.state.restaurants.map(({ _id, main_picture, name, description}, index) => (
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
        <footer className="App-header">                    
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}



const NotFoundPage = () => {
  return (
    <div>
      <h4>
        404 Page Not Found
      </h4>
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

class Restaurant extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      reviews : [],
      pictures : [],
      loading: true
    };
  }
 
  componentDidMount() {
    console.log(this.props.location)
    fetch(`http://localhost:4000/restaurant/${this.props.match.params.id}/review`).then(resp => {      
      resp.json().then(({ data }) => {        
        console.log(data);
        this.setState({
          reviews : data,
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
              <h1>{this.props.location.restaurant.name}</h1>
              <p>{this.props.location.restaurant.description}</p>
              <h3>Fotografias</h3>
              {
                this.state.pictures.length > 0
                ? this.state.pictures.map(picture => (
                  <>
                    <img scr={picture.url} alt={picture.url} />
                  </>
                  ))                
                : <h2>No pictures</h2>
              }
              <h3>Comentarios</h3>
              <h3>ESCRIBIR NUEVO COMENTARIO</h3>
              {
                this.state.reviews.length > 0
                ? this.state.reviews.map(({ name, comment, createdAt }, index) => {                  
                  const date = new Date(createdAt);
                  return (
                    <div key={index}>
                      <p><span>{name}</span> el <span>{`${date.getDate()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`}</span></p>
                      <p>{comment}</p>
                    </div>
                  )})
                : <h3>No comments</h3>
              }
              <form>
                <label>
                  Nombre:
                  <input type="text" name="name" />
                </label>
                <label>
                  Comentario:
                  <input type="text" name="comment" />
                </label>
                <input type="submit" value="Enviar" />
              </form>              
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


export default App;
