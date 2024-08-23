# 创建项目
```
npx create-react-app --template typescript react-demo
```
# 运行项目
```
pnpm install
pnpm start
```
# hooks
useState:  状态是变化的数据
useEffect: 副作用
useLayoutEffect: effect 逻辑执行完再渲染


useReducer
useReducer + immer: 复杂对象的修改


useRef
forwardRef: 把ref从子组件传递到父组件,暴露原生标签

useImperativeHandle: 暴露一些自定义内容
3 个参数，第一个是传入的 ref，第二个是是返回新的 ref 值的函数，第三个是依赖数组

useContext: 跨任意层组件传递数据
memo: memo 的作用是只有 props 变的时候，才会重新渲染被包裹的组件
useMemo: 在 deps 数组变化的时候，计算新的值返回
useCallback: 当 deps 数组变化的时候，返回新的 function

Conclusion:
- useState：状态是变化的数据，是组件甚至前端应用的核心。useState 有传入值和函数两种参数，返回的 setState 也有传入值和传入函数两种参数。

- useEffect：副作用 effect 函数是在渲染之外额外执行的一些逻辑。它是根据第二个参数的依赖数组是否变化来决定是否执行 effect，可以返回一个清理函数，会在下次 effect 执行前执行。

- useLayoutEffect：和 useEffect 差不多，但是 useEffect 的 effect 函数是异步执行的，所以可能中间有次渲染，会闪屏，而 useLayoutEffect 则是同步执行的，所以不会闪屏，但如果计算量大可能会导致掉帧。

- useReducer：封装一些修改状态的逻辑到 reducer，通过 action 触发，当修改深层对象的时候，创建新对象比较麻烦，可以结合 immer

- useRef：可以保存 dom 引用或者其他内容，通过 xxRef.current 来取，改变它的内容不会触发重新渲染

- forwardRef + useImperativeHandle：通过 forwardRef 可以从子组件转发 ref 到父组件，如果想自定义 ref 内容可以使用 useImperativeHandle

- useContext：跨层组件之间传递数据可以用 Context。用 createContext 创建 context 对象，用 Provider 修改其中的值， function 组件使用 useContext 的 hook 来取值，class 组件使用 Consumer 来取值

- memo + useMemo + useCallback：memo 包裹的组件只有在 props 变的时候才会重新渲染，useMemo、useCallback 可以防止 props 不必要的变化，两者一般是结合用。不过当用来缓存计算结果等场景的时候，也可以单独用 useMemo、useCallback

# react 组件和 hook 的单测写法，针对 @testing-library/react 这个库

- render：渲染组件，返回 container 容器 dom 和其他的查询 api
- fireEvent：触发某个元素的某个事件
- createEvent：创建某个事件（一般不用这样创建）
- waitFor：等待异步操作完成再断言，可以指定 timeout
- act：包裹的代码会更接近浏览器里运行的方式
- renderHook：执行 hook，可以通过 result.current 拿到 hook 返回值