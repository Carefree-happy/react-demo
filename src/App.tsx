import { useEffect, useState } from 'react';

function App() {

    const [count,setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            console.log(count);
            // 解除闭包，每次的 count 都是参数传入的上一次的 state
            setCount(count => count + 1)
        }, 1000);
    }, []);

    return <div>{count}</div>
}

export default App;
