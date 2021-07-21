import React from 'react';
import Home from './pages/home/containers/Home';
import NotFoundPage from './pages/error/components/NotFoundPage';
import Restaurant from './pages/restaurant/containers/Restaurant';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurant/:id" component={Restaurant} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>      
    );  
}

export default App;
