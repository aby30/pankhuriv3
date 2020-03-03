import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './modules/Home';
import Favorite from './modules/Favorite';
import Gallery from './modules/Gallery';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/index' exact component={Home}/>
          <Route path='/favorite' exact component={Favorite}/>
          <Route path='/gallery' exact component={Gallery}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
