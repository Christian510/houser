import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/dashboard.js';
import Wizard from './components/Wizard/wizard.js';
import Header from './components/Header/header.js';
import House from './components/House/house.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Let's get this show started!!!!!
          </p>
        </header>
        < Dashboard />
        < Wizard />
        < Header />
        < House />
      </div>
    );
  }
}

export default App;
