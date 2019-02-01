import React from 'react';
import houserLogo from './Desktop/devmtn/webDev-1/simulation-2-houser/houser/assets/houser_logo.png';
// console.log(houserLogo);

export default function Header() {
    return (
        <header className="App-header">
            <div className="inner-header" >
                <div >
                    <img id="logo" src={houserLogo} alt="Logo" />
                </div>
                <div>
                    <h1>Houser</h1>
                </div>

            </div>

        </header>
    );
}