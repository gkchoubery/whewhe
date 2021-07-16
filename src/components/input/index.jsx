import React from 'react';
import TokenButton from '../tokenButton';

const UserInputComponent = ({ tokens, toggleTokenSelection, onCashButtonPressed, onClearClicked, onCashSummaryClicked, cashEnabled, onRandomButtonClicked }) => {

    return (
        <div className="col-md-6 text-center">
            <h3>Tickets Selection</h3>
            <div className="button-container ">
                {
                    tokens.map((t, i) => <TokenButton key={i} token={t} onTokenSelected={toggleTokenSelection} />)
                }
                <div className="mt-3">
                    <button disabled={!cashEnabled} onClick={onCashSummaryClicked} className="btn btn-success">Cash</button>
                    <button className="btn btn-primary" onClick={onRandomButtonClicked}>Random</button>
                    <button className="btn btn-danger" onClick={onClearClicked}>Clear</button>
                </div>
            </div>
        </div>
    )

}

export default UserInputComponent;