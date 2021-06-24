import React from 'react';
import TokenButton from '../tokenButton';

const UserInputComponent = ({ tokens, toggleTokenSelection, onCashButtonPressed, onClearClicked, onCashSummaryClicked, cashEnabled }) => {

    return (
        <>
            <div className="col-md-6">
                <h3>Tickets selection</h3>
                <div className="button-container">
                    {
                        tokens.map((t, i) => <TokenButton key={i} token={t} onTokenSelected={toggleTokenSelection} />)
                    }
                    <div>
                        <button disabled={!cashEnabled} onClick={onCashSummaryClicked} className="btn btn-success">Cash</button>
                        <button className="btn btn-danger" onClick={onClearClicked}>Clear</button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <h3>Bet Amount</h3>
                {cashOptions.map(c => <button disabled={!cashEnabled} className="btn btn-warning cash" onClick={() => onCashButtonPressed(c)} key={c}>${c}</button>)}
            </div>
        </>
    )

}

const cashOptions = [1, 5, 10, 20];

export default UserInputComponent;