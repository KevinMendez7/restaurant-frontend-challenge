import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { shallow } from 'enzyme'
import App from './App';
import Home from './pages/home/containers/Home';
import NotFoundPage from './pages/error/components/NotFoundPage';
import findRoutes from '../test/utils/findRoutes';
import Restaurant from './pages/restaurant/containers/Restaurant';

describe('<App />', () => {

  const wrapper = shallow(
    <App/>
  );

  describe('<Routes>', () => {

    it('Path / should be <Home /> Component', () => {
      const routes = wrapper.find(Route);
      const pathMap = findRoutes(routes);
      
      expect(pathMap['/']).toBe(Home);
  
    });

    it('Path /restaurant/:id should be < /> Component', () => {
      const routes = wrapper.find(Route);
      const pathMap = findRoutes(routes);
      
      expect(pathMap['/restaurant/:id']).toBe(Restaurant);
  
    });

    it('Unknown path(undefined) should be <NotFoundPage /> Component', () => {
      const routes = wrapper.find(Route);
      const pathMap = findRoutes(routes);
      
      expect(pathMap['undefined']).toBe(NotFoundPage);
  
    });

    it('Should be one <Router /> Component from React Router', () => {
      const router = wrapper.find(Router);      
      
      expect(router).toHaveLength(1);
  
    });

    it('Should be one <Switch /> Component from React Router', () => {
      const router = wrapper.find(Switch);      
      
      expect(router).toHaveLength(1);
  
    });
  });
  


});

