import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserPicker from './pages/UserPicker';
import App from './pages/App';
import NotFound from './pages/NotFound';
import Footer from './uiComponents/Footer';
// import AppState from '../Context/AppState';


const Routing = (props) => {
  return ( 
      <Router>
        <Switch>
          <Route exact path='/' component={UserPicker}  />
          <Route exact path='/user/:userId/' component={App} />
          {/* <Route path='/user/:userId'
            render={(props) => <App /> }

          /> */}
          <Route component={NotFound} />
        </Switch>
        <Footer />

      </Router>
  
  )
}

export default Routing;
