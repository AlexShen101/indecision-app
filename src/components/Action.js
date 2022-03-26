import React from 'react';

function Action(props) {
    return (
        <div className="container">
            <button id="action"
                onClick={props.decide}
                disabled={!props.hasOptions}>
                What Should I Do ?
            </button>
        </div>

    );
}

export default Action;