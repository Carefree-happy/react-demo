import React from 'react';
import './App.css';
import Space from './components/Space';
import { ConfigProvider } from './components/Space/ConfigProvider';

function App() {
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
        <ConfigProvider space={{ size: 20 }}>
          <Space direction="horizontal">
            <div className="box">1</div>
            <div className="box">2</div>
            <div className="box">3</div>
          </Space>
          <Space direction="vertical">
            <div className="box">4</div>
            <div className="box">5</div>
            <div className="box">6</div>
          </Space>
        </ConfigProvider>
      </header>
      
    </div>
  );
}

export default App;