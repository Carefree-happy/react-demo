import { ChangeEvent, useState } from 'react';

const App = () => {

    const [value, setValue] = useState('Sun')

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
        setValue(event.target.value)
    }

    return <input value={value} onChange={onChange}/>
}

export default App;
