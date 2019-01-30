import React from 'react';


export default function House(props) {
    return (
        <div>
            <h1>House</h1>
            <div>
            { props.children }
        </div>
        </div>
    );
}


