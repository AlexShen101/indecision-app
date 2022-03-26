import React from 'react';

import Header from './Header';
import Action from './Action';
import OptionList from './OptionList';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        optionsArray: [],
        selectedOption: undefined
    }

    decide = () => {
        let choice = this.state.optionsArray[(Math.floor)(Math.random() * this.state.optionsArray.length)];
        this.setState(() => {
            return {
                selectedOption: choice
            };
        })
    }

    clearSelectedOption = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            };
        })
    }

    removeAllOptions = () => {
        this.setState(() => {
            return {
                optionsArray: []
            };
        });
    }

    removeOption = (index) => {
        this.setState((prevState) => {
            //option 1
            this.state.optionsArray.splice(index, 1);

            return {
                optionsArray: prevState.optionsArray
            };

        })
    }

    addOption = (option) => {
        if (!option) {
            return 'Enter a valid value';
        }
        else if (this.state.optionsArray.indexOf(option) > -1) {
            return 'the option already exists!';
        }
        else {
            this.setState((prevState) => {
                return {
                    optionsArray: prevState.optionsArray.concat([option])
                };
            });
        }
    }

    render() {
        const title = 'INDECISION';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div id="Indecision-App">
                <Header
                    title={title}
                    subtitle={subtitle}
                />
                <Action
                    hasOptions={this.state.optionsArray.length > 0}
                    decide={this.decide}
                />
                <br></br>
                <OptionList
                    optionsArray={this.state.optionsArray}
                    removeAllOptions={this.removeAllOptions}
                    removeOption={this.removeOption}
                />
                <AddOption addOption={this.addOption} />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearSelectedOption={this.clearSelectedOption}
                />
            </div>
        );
    }
}
