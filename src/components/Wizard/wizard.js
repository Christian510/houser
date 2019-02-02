import React, { Component } from 'react';

// Import Components //
import Header from '../Header/header';
import Input from './form-components/Input.js';

class Wizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newProperty: {
                propertyName: "",
                address: "",
                city: "",
                state: "",
                zip: "",
            },
            state: ["AL", "AK", "AZ" ,"AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WY"],
        };
        this.handlePropertyName = this.handlePropertyName.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleZip = this.handleZip.bind(this);
        this.handleAddNewProperty = this.handleAddNewProperty.bind(this);
        this.handleCancelProperty = this.handleCancelProperty.bind(this);
    }

    handlePropertyName(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newProperty: {
                    ...prevState.newProperty,
                    propertyName: value
                }
            }),
            () => console.log(this.state.newProperty)
        );
    }

    render() {
        return (
            <div>
                <Header />
                <div className="wizard-wrapper">
                    <div className="wizard-container">
                        <header className="wizard-header">
                            <div>
                                <h1>Add New Listing</h1>
                            </div>
                            <div>
                                <button className="cancel-bt" onClick="#">Cancel</button>
                            </div>
                        </header>
                        <form className="">
                            <Input 
                               inputType={"text"}
                               title={"Property Name"}
                                value={this.state.newProperty.propertyName}
                                handleChange={this.handleInput}
                            />{" "}

                            <input >Property Name</input>
                            <input >Address</input>
                            <div>
                                <input >City</input>
                                <input >State</input>
                                <input >Zip</input>
                            </div>

                        </form>
                        <div>
                            <button >Complete</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Wizard;