import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import './index.css';
import Game from './modules/Game'
import Repos from './modules/Repos'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/repos" component={Repos}/>
    <Route path="/game" component={Game}/>
  </Router>
), document.getElementById('root'))
