import { ChangeEvent, useEffect, useRef } from 'react';

const App = () => {

    // 1.受控模式 value 由用户控制就是非受控模式，由代码控制就是受控模式
    // function onChange(event: ChangeEvent<HTMLInputElement>) {
    //     console.log(event.target.value)
    // }

    // return <div>
    //     <input defaultValue={'sun'} onChange={onChange}></input>
    // </div>;

    // 2.ref
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setTimeout(() => {
            console.log(inputRef.current?.value)
        }, 2000);
    }, [])

    return <input defaultValue={'Sun'} ref={inputRef}/>
}

export default App;
