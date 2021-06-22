import React from 'react';

const TokenButton = ({ token, onTokenSelected }) => {
    const { value, selected } = token;
    return (
        <button
            className={selected ? 'selected' : ''}
            onClick={() => onTokenSelected(token)}>
            {value}
        </button>
    )
}

export default TokenButton;