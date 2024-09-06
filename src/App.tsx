import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import useMountedState from './hooks/U/useMountedState'

function App() {
    const isMounted = useMountedState();
    const [,setNum] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setNum(1)
        }, 6000)
    }, [])

    return <div>{isMounted() ? 'mounted' : 'pending'}</div>
}

export default App