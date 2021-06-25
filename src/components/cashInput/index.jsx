import React from 'react';

const CashInputComponent = ({ onCashButtonPressed, cashEnabled }) => {
    return (
        <div className="col-md-3 text-center">
            <h3>Bet Amount</h3>
            {cashOptions.map(c => <button disabled={!cashEnabled} className="btn btn-warning cash" onClick={() => onCashButtonPressed(c)} key={c}>${c}</button>)}
        </div>
    )
}

const cashOptions = [1, 5, 10, 20];

export default CashInputComponent;