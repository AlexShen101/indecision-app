import React from 'react';
import Option from './Option';

function OptionList(props) {
    return (
        <div className="container">
            <div className="widget">
                <div className="widget__header">
                    <h1>{props.optionsArray <= 0 ? 'Enter an option to begin!' : 'Your Options:'}</h1>
                    <button
                        className="button2"
                        onClick={props.removeAllOptions}
                    >Remove All
                    </button>
                </div>

                <ol id="options-holder">
                    {props.optionsArray.map((option, index) => (
                        <Option
                            option={option}
                            key={index}
                            index={index}
                            removeOption={props.removeOption}
                        />)
                    )}
                </ol>
            </div>

        </div>
    );
}

export default OptionList;