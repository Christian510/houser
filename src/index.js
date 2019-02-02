import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import Header from './components/Header/header.js';
import House from './components/House/house.js';
import Wizard from './components/Wizard/wizard.js';

ReactDOM.render(
    <Router>
        <Switch>
        < Route exact path="/" component={App} />
        < Route path="/dashboard" render={ ()=> (
            < Dashboard >
                <Route path="/house" component= {House()} />
            </Dashboard>
        )} />
        < Route path="/header" component={Header} />
        < Route path="/wizard" component={Wizard} />
        </Switch>
    </Router>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
