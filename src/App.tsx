import { useRef } from "react";
import useSize from "./hooks/U/useSize";


function App() {
    const ref = useRef<HTMLDivElement>(null);
    const size = useSize(ref);

    return (
        <div ref={ref}>
            <p>改变窗口大小试试</p>
            <p style={{background: 'pink'}}>
                width: {size?.width}px, height: {size?.height}px,
            </p>
        </div>
    )
}

export default App