import React, { Component } from 'react';
// import House from './components/House/house.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export default class Dashboard extends Component {
    render() {
        return (
            <div className="App" >
            <header className="App-header" >
                <div>
                    <h1>Dashboard</h1>
                </div>
            </header>
                < House />
            </div>

        );
    }
}

