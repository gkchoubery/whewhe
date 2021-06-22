import React, { useState } from 'react';

const CashComponent = () => {

    const [totalCash, setTotalCash] = useState(0);

    const addMoreCash = val => {
        const c = val + totalCash;
        setTotalCash(c);
    }

    return (
        <div>
            {cashOptions.map(v =>
                <button onClick={() => addMoreCash(v)}>{v}</button>
            )}
        </div>
    )
}

const cashOptions = [1, 5, 10, 20];

export default CashComponent;