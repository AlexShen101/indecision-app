import React from 'react';
import Modal from 'react-modal';

const modalStyles = {
    overlay: {
        background: 'rgb(0 40 80 / 75%)'
    },
    content: {
        top: '15%',
        left: '15%',
        right: '15%',
        bottom: 'auto',
        margin: '0 auto',
        padding: '28px 30px 30px',
        color: 'rgb(188 218 255)',
        background: '#333',
        border: '1px solid rgb(188 218 255)',
        borderRadius: '0px',
        boxShadow: '0 0 28px 2px rgba( 0, 0, 0, 0.85 )',
        boxSizing: 'border-box',
        wordBreak: 'break-word'
    }
}

Modal.setAppElement('#app');

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Task to Complete:"
            style={modalStyles}
        >
            <h1>Selected Task to Complete:</h1>
            {props.selectedOption && <h2>{props.selectedOption}</h2>}

            <button onClick={props.clearSelectedOption}>Ok</button>
        </Modal>
    );
}

export default OptionModal;