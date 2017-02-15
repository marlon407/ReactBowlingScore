import React, { Component } from 'react';
import { Link } from 'react-router'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/game">Game</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
