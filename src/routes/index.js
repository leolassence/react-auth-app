import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../assets/style/style.css';
import HomeContainer from '../components/Home';
import HeaderContainer from '../components/Header';
import SignInContainer from '../components/SignIn';
import SignUpContainer from '../components/SignUp';
import ErrorsContainer from '../components/Errors';

export default (
  <BrowserRouter>
    <HeaderContainer />
    <ErrorsContainer />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/signin" component={SignInContainer} />
      <Route exact path="/signup" component={SignUpContainer} />
    </Switch>
  </BrowserRouter>
);
