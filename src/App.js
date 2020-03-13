import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './modules/Home';
import Favourite from './modules/Favorite';
import Gallery from './modules/Gallery';
import About from './modules/About';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/index' exact component={Home}/>
          <Route path='/favourite' exact component={Favourite}/>
          <Route path='/gallery' exact component={Gallery}/>
          <Route path='/about' exact component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
