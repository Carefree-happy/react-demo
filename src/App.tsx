import { useState } from 'react';

interface SunProps {
    name: string,
    content: React.ReactElement
}

const Sun: React.FunctionComponent<SunProps> = (props) => {
    return <div>aa, {props.name}{props.content}</div>
}

// ReactNode > ReactElement > JSX.Element

const content: React.ReactNode = 23

const App = () => {
    return <div>
        <Sun name='SUN' content={<button>XXX</button>}></Sun>
    </div>;
}

export default App;
