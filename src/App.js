import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/dashboard.js';
// import Wizard from './components/Wizard/wizard.js';
import Header from './components/Header/header';


class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        <Dashboard />
        {/* < Wizard />
        < Header /> */}
      </div>
    );
  }
}

export default App;
