import React, { useState } from 'react';
import './App.css';
import UserInputComponent from './components/input';
import CashInputComponent from './components/cashInput';
import SummaryComponent from './components/summary';

const MAX_SELECTIONS = 5;
const MAX_TOKENS = 20;

function App() {

  const [tokens, setTokens] = useState([...defaultTokens]);
  const [cashEnabled, setCashEnabled] = useState(false);
  const [cash, setCash] = useState(0);

  const onClearClicked = () => {
    console.log('Setting Defaults');
    const defaults = tokens.map(t => ({
      ...t,
      selected: false
    }))
    setTokens(defaults);
    clearCash();
  }

  const clearCash = (enableCash = false) => {
    setCash(0);
    setCashEnabled(enableCash);
  }

  const onCashButtonPressed = (value = 0) => {
    if (cashEnabled) {
      const updatedCash = cash + value;
      setCash(updatedCash);
    } else {
      alert('User needs to select 5 numbers before betting cash.');
    }
  }

  const onCashSummaryClicked = () => {
    const selectedNumbers = tokens.filter(t => t.selected).map(t => t.value).join(', ');
    alert(`You selected the numbers: ${selectedNumbers} and bet $${cash}`);
  }

  const onRandomButtonClicked = () => {
    setTokens(randomNumbers(tokens));
    clearCash(true);
  }

  const toggleTokenSelection = (token) => {
    // Check if user is adding a number
    if (!token.selected) {
      // If numbers selected are less than 5
      if (canSelectTokens(tokens)) {
        const updatedTokens = toggleSelection(token, tokens);
        setTokens(updatedTokens);
        if (!canSelectTokens(tokens)) {
          setCashEnabled(true);
        }
      } else {
        alert('You can only select 5 tokens');
      }
    } else {
      const updatedTokens = toggleSelection(token, tokens);
      setTokens(updatedTokens);
      clearCash();
    }
  }


  return (
    <div className="container">
      <div className="row">
        <CashInputComponent cashEnabled={cashEnabled} onCashButtonPressed={onCashButtonPressed} />
        <UserInputComponent tokens={tokens}
          toggleTokenSelection={toggleTokenSelection}

          onClearClicked={onClearClicked}
          onCashSummaryClicked={onCashSummaryClicked}
          onRandomButtonClicked={onRandomButtonClicked}
          cashEnabled={cashEnabled} />


        <SummaryComponent tokens={tokens.filter(t => t.selected)} cash={cash} />

      </div>
    </div>
  );
}

const defaultTokens = [...Array(MAX_TOKENS).keys()].map(v => ({
  value: v + 1,
  selected: false
}));

const canSelectTokens = (tokens = []) => {
  return tokens.filter(t => t.selected).length < MAX_SELECTIONS;
}

const randomNumbers = (allTokens) => {
  const RANDOM_NUMBER_COUNT = 5;
  const randomNumbers = [];
  while (randomNumbers.length < RANDOM_NUMBER_COUNT) {
    let r = Math.floor(Math.random() * MAX_TOKENS) + 1;
    if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
  }
  return allTokens.map(({ value }) => ({
    value,
    selected: randomNumbers.includes(value)
  }));
}

const toggleSelection = (token, tokens = []) => {
  const { value, selected } = token;
  const updatedTokens = [...tokens];
  const tempToken = updatedTokens.find(t => t.value === value);
  tempToken.selected = !selected;
  return updatedTokens;
}

export default App;
