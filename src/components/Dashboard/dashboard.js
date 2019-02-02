import React, { Component } from 'react';
import House from '../House/house.js';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class Dashboard extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <header className="dashboard-header">
                    <div id="dash-title">
                        <h1>Dashboard</h1>
                    </div>
                    <div id="add-prop-botton">
                        <button onclick="AddNewProp()">Add New Property</button>
                    </div>
                </header>
                

                <div className="dashboard" >
                    <div id="display-title">
                        <p>Home Listings</p>
                    </div>
                    <House />
                </div>

            </div>


        );
    }
}
export default Dashboard;
