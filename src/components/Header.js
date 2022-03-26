import React from 'react';

function Header(props) {
    return (
        <div id="header">
            <div className="container">
                <h1 id="header__title">{props.title}</h1>
                <h3 id="header__subtitle">{props.subtitle}</h3>
            </div>
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

export default Header;