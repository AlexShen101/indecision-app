import React from 'react';

function Option(props) {
    return (
        <div id="option">
            <li id="option-item">{props.option}</li>
            <button
                className="button2"
                onClick={() => { return props.removeOption(props.index) }}
            >
                Remove
            </button>
        </div>
    );
}

export default Option;