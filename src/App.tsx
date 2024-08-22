import React, { useEffect, useImperativeHandle, useRef } from "react";

interface RefProps {
    focusSun: () => void
}

const SUN: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
        return {
            focusSun() {
                inputRef.current?.focus();
            }
        }
    }, [inputRef])

    return <div>
        <input ref={inputRef}></input>
    </div>
}

const WrappedSun = React.forwardRef(SUN)

function App() {
    const ref = useRef<RefProps>(null);

    useEffect(() => {
        console.log('ref', ref.current)
        ref.current?.focusSun();
    })

    return (
        <div>
            <WrappedSun ref={ref}></WrappedSun>
        </div>
    );
}

export default App;