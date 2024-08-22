import { Reducer, useReducer } from 'react';

interface Data {
    result: number;
}

interface Action {
    type: 'add' | 'minus',
    num: number
}

function reducer(state: Data, action: Action) {
    switch(action.type) {
        case 'add':
            return {
                result: state.result
            }
        case 'minus':
            return {
                result: state.result
            }
    }
    return state
}

const App = () => {
    const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(reducer, 'zero', (param) => {
        return {
            result: 1
        }
    })

    return <div>
        hello world
    </div>;
}

export default App;
