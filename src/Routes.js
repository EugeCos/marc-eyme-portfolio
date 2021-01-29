import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from 'components/MainView/Home/Home';


const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  )
}

export default Routes