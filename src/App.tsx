import { useState } from "react"
import useTimeout from "./hooks/U/useTimeout";

function App() {
    const [state, setState] = useState(0);

    useTimeout(() => {
        setState(state + 1)
    }, 1000);
    return (
        <div>
            <p>{ state }</p>
        </div>
    )
}

export default App