import React, { FC } from 'react';
import './App.css';
interface AaaProps {
  children: React.ReactNode[]
}

const Aaa: FC<AaaProps> = (props) => {
  const { children } = props;

  return <div className='container'>
    {
      children.map((item, index) => {
        return <div className='item'>{item}</div>
      })
    }
  </div>
}

function App() {
  return (
    <Aaa>
        {
          [
            <span>111</span>,
            <span>333</span>,
            [<span>444</span>, <span>222</span>]
          ]
        }
      </Aaa>
  );
}

export default App;