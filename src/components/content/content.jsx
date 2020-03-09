import React from 'react';
import './content.css';

const Container = props => {
    return (
        <div className="content-container">
            {props.children}
        </div>
    )
}

export default Container;