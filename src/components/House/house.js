import React from 'react';


export default function House(props) {
    return (
        <div className="App">
            <header className="App-header">
                <h1>House</h1>
            </header>
            <div>
                {props.children}
            </div>
        </div>
    );
}


