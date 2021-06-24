import React from 'react';
import './index.css';

const TokenButton = ({ token, onTokenSelected }) => {
    const { value, selected } = token;
    return (
        <button
            id={value}
            className={selected ? 'btn btn-info' : 'btn btn-warning'}
            onClick={() => onTokenSelected(token)}>
            {value}
        </button>
    )
}

export default TokenButton;