import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './modules/Home';
import Favorite from './modules/Favorite';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/index' exact component={Home}/>
          <Route path='/favorite' exact component={Favorite}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
