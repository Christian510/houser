import React from 'react';
import houserLogo from '../../assets/houser_logo.png';
// console.log(houserLogo);

function Header() {
    return (
        <header className="App-header">
            <div className="inner-header" >
            <div id="inner-wrapper">
            <div className="App-logo" >
                    <img id="logo" src={houserLogo} alt="Logo" />
                </div>
                <div className="App-title">
                    <h1>Houser</h1>
                </div>
            </div>

            </div>

        </header>
    );
}
export default Header;