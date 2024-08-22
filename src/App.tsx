import { useRef, useState } from 'react';

interface SunProps {
    name: string,
    content: React.ReactElement
}

const Sun: React.FunctionComponent<SunProps> = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    const objRef = useRef<{ num: number }>();
    // 1. Ref 的使用
    // ref 中如果传 null，则current不能改
    objRef.current = { num: 24 };
    // 基础类型current不能为null
    const numRef = useRef<boolean>();
    numRef.current = false

    return <div ref={ref}>aa, {props.name}{props.content}</div>
}

// ReactNode > ReactElement > JSX.Element

const content: React.ReactNode = 23

const App = () => {
    const [name, setName] = useState<string>('SUN')

    return <div>
        <Sun name={name} content={<button>XXX</button>}></Sun>
    </div>;
}

export default App;
