import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateAccount from "./pages/CreateAccount"
import UserHome from './pages/UserHome';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/create' component={CreateAccount}></Route>
      <Route exact path='/userProfile' component={UserHome}></Route>
    </Switch>
  );
}

export default Main;