import React from 'react';

export default class AddOption extends React.Component {

    state = {
        error: undefined
    }

    addOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        e.target.elements.option.value = '';

        this.setState(() => {
            return {
                error: error
            };
        });
    }

    render() {
        return (
            <div className="container">
                <div className="add-option">
                    {this.state.error && <p id="add-option__error">{this.state.error}</p>}
                    < form onSubmit={this.addOption} >
                        <input type="text" name="option" id="add-option__input"></input>
                        <button className="button">Add Option</button>
                    </form >
                </div>
            </div>

        );
    }
}
