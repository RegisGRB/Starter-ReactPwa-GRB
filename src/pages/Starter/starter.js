import React from 'react';
import "./starter.scss";
const Starter = props => {
    return (
        <div className="container topPage">
            <div className="row center">
            {props.children}
            </div>
        </div>
    );
};

export default Starter;