import React from 'react';

const Input = props => {
    return (
        <div>
            <label for={} className="">
                {}
            </label>
            <input
            className=""
            type={props.type}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            />
        </div>
    );
}