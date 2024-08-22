import React, { useEffect, useRef } from "react";

const SUN: React.ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
    return <div>
        <input ref={ref}></input>
    </div>
}

const WrappedSun = React.forwardRef(SUN)

function App() {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log('ref', ref.current)
        ref.current?.focus()
    })

    return (
        <div>
            <WrappedSun ref={ref}></WrappedSun>
        </div>
    );
}

export default App;