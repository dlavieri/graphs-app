import React, { useState } from 'react';
import './input.css';

const DataInput = props => {

    return (
        <div className="datainput-container">
            <textarea className="datainput">Paste your .csv data here</textarea>
        </div>
    )
}

export default DataInput;