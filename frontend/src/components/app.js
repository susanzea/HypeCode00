import React from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>

);

export default App;