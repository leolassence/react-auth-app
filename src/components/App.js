import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../assets/style.css';
import Home from './Home';
import Header from '../containers/Header';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import Errors from './Errors';

export default function App() {
  return (
    <>
      <Header />
      <Errors />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </>
);
}
