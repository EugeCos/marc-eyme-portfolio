import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from 'components/MainView/Home/Home';
import About from 'components/MainView/About/About';
import Portfolio from 'components/MainView/Portfolio/Portfolio';
import Gallery from 'components/MainView/Gallery/Gallery';
// import Prints from 'components/MainView/Prints/Prints';
import Contact from 'components/MainView/Contact/Contact';


const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/portfolio/:gallery' component={Gallery} />
      {/* <Route exact path='/prints' component={Prints} /> */}
      <Route exact path='/contact' component={Contact} />
    </Switch>
  )
}

export default Routes