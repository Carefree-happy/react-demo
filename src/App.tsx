import React, { Component, ReactNode } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle/Toggle';
import useCounter from './hooks/Counter/useCounter';


interface ErrorBoundaryState {
    hasError: boolean;
    message?: string;
  }
  
  interface ErrorBoundaryProps {
    children: ReactNode;
  }
  
  class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = {
        hasError: false
      };
    }
  
    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
      return { hasError: true, message: error.message };
    }
  
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <div>出错了： {this.state.message}</div>;
      }
      return this.props.children;
    }
  }
  
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
      </header>
      <ErrorBoundary>
        <Bbb></Bbb>
      </ErrorBoundary>
    </div>
  );
}

export default App;