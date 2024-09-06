import { MouseEventHandler, useEffect, useRef } from 'react'

function App() {
    const ref = useRef<HTMLDivElement>(null);

    const clickHandler: MouseEventHandler<HTMLDivElement> = (e: any) => {
        const top = document.getElementById('box')!.getBoundingClientRect().top;

        console.log('box pageY', e.pageY);
        console.log('box clientY', e.clientY)
        console.log('box offsetY', e.pageY - top - window.scrollY);
        console.log('box offsetY', e.clientY - top);
        console.log('box screenY', e.screenY);

        console.log('scrollTop', ref.current?.scrollTop);
        console.log('offsetTop', ref.current?.offsetTop);
        console.log('clientTop', ref.current?.clientTop);
    };

    useEffect(() => {
        document.getElementById('box')!.addEventListener('click', (e) => {
            console.log('box2 pageY', e.pageY);
            console.log('box2 clientY', e.clientY)
            console.log('box2 offsetY', e.offsetY);
            console.log('box2 screenY', e.screenY);
        });
    }, []);

    return (
        <div  style={{height: '2000px'}}>
            <div 
                id="box" 
                ref={ref} 
                onClick={clickHandler}
                style={{
                    width: '100px',
                    height: '100px',
                    background: 'blue',
                    overflow: 'auto'
                }}
            >
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
            </div>
        </div>
    )
}

export default App