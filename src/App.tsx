import React, { Suspense } from 'react';
import './App.css';
import Toggle from './components/Toggle/Toggle';
import useCounter from './hooks/Counter/useCounter';
import { IconAdd } from './icon/IconAdd';
import { IconEmail } from './icon/IconEmail';
import { createFromIconfont } from './icon/createFrontIconfont';

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

const IconFont = createFromIconfont('//at.alicdn.com/t/c/font_4443338_a2wwqhorbk4.js');

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
        <div style={ {padding: '50px'} }>
          <IconAdd size='40px'></IconAdd>
          <IconEmail spin></IconEmail>
          <IconEmail style={{color: 'blue', fontSize: '50px'}}></IconEmail>
          <IconFont type="icon-shouye-zhihui" size="40px"></IconFont>
          <IconFont type="icon-gerenzhongxin-zhihui" fill='red' size="90px"></IconFont>
        </div>
      </header>
      
    </div>
  );
}

export default App;