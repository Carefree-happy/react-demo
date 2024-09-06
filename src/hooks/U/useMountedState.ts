import { useCallback, useEffect, useRef } from "react";


export default function useMountedState(): () => boolean {
    const mountedRef = useRef<boolean>(false);
    const get = useCallback(() => mountedRef.current, []);

    // useEffect 是在 dom 操作之后异步执行的
    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
        }
    }, []);

    console.log('mountedRef.current', mountedRef.current)

    return get;
}