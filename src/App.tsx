import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle/Toggle';
import useCounter from './hooks/Counter/useCounter';

function App() {
  const [count, increment, decrement] = useCounter(100);
  return (
    <div className="App">
      <header className='App-header'>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Toggle />
        <button onClick={() => increment(1)}>+</button>
        <button onClick={() => decrement(1)}>1</button>
        <p>{count}</p>
      </header>
    </div>
  );
}

export default App;