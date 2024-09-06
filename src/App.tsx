import useLifecyles from './hooks/U/useLifecycles';

function App() {
    useLifecyles(() => console.log('MOUNTED'), () => console.log('UNMOUNTED'));

    return <div>mounted</div>
}

export default App