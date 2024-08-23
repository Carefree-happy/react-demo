import React, { Suspense } from 'react';
import './App.css';
import Toggle from './components/Toggle/Toggle';
import useCounter from './hooks/Counter/useCounter';

let data: string, promise;

function fetchData() {
  if (data) return data;
  promise = new Promise<void>(resolve => {
    setTimeout(() => {
      data = '取到的数据'
      resolve()
    }, 2000)
  })
  throw promise;
}

function Content() {
  const data = fetchData();
  return <p>{data}</p>
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
        <Suspense fallback={'loading data'}>
          <Content />
        </Suspense>
      </header>
      
    </div>
  );
}

export default App;