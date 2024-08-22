import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';

interface SunProps {
    name: string
}

interface SunRef {
    sunFocus: () => void
}

const Sun: React.ForwardRefRenderFunction<SunRef, SunProps> = (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => {
        return {
            sunFocus() {
                inputRef.current?.focus()
            }
        }
    }, [inputRef])

    return <div>
        <input ref={inputRef} />
        <div>{props.name}</div>
    </div>
}

const WrappedSun = React.forwardRef(Sun)

const App = () => {
    const ref = useRef<SunRef>(null)

    useEffect(() => {
        ref.current?.sunFocus();
    }, [])

    return <div>
        <WrappedSun name='Sun' ref={ref}></WrappedSun>
    </div>;
}

export default App;
