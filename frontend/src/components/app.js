import React from "react";
import '../assets/style/main.scss'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from "./profile/profile_container";


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/myprofile" component={ProfileContainer}/>
    </Switch>
  </div>

);

export default App;