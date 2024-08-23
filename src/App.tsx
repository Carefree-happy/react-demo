import React from 'react';
import './App.css';
import Toggle from './components/Toggle/Toggle';
import useCounter from './hooks/Counter/useCounter';
import { ErrorBoundary } from "react-error-boundary";
  
function Bbb() {
  // 这里需要进行非空断言，确保 window.a.b 存在
  const b = (window as any).a.b;
  return <div>{b}</div>;
}

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
        <ErrorBoundary fallbackRender={({ error }) => {
          console.log('error', error.message);
          return <div>
          <p>出错了：</p>
          <div>{error.message}</div>
        </div>
        }}>
          <Bbb></Bbb>
        </ErrorBoundary>
      </header>
      
    </div>
  );
}

export default App;