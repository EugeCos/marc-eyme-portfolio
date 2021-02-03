import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from 'components/MainView/Home/Home';
import About from 'components/MainView/About/About';


const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </Switch>
  )
}

export default Routes