import React, { useState } from 'react';
import TokenButton from './tokenButton';

const MAX_SELECTIONS = 5;

const TicketComponent = (props) => {

    const [tokens, setTokens] = useState(defaultTokens);

    const onTokenSelected = ({ value }) => {
        if (canSelectTokens(tokens)) {
            const updatedTokens = [...tokens];
            const tempToken = updatedTokens.find( t => t.value === value);
            tempToken.selected = true;
            setTokens(updatedTokens);
        } else {
            alert('You can only select 5 tokens');
        }
        
    }

    const numbers = [...Array(20).keys()].map(i => i + 1);
    console.log(numbers);

    return (
        <div>
            {
                tokens.map(t => <TokenButton token={t} onTokenSelected={onTokenSelected} />)
            }
        </div>
    );

};

const defaultTokens = [...Array(20).keys()].map(v => ({
    value: v + 1,
    selected: false
}));

const canSelectTokens = (tokens = []) => {
    return tokens.filter(t => t.selected).length < MAX_SELECTIONS;
}

export default TicketComponent;