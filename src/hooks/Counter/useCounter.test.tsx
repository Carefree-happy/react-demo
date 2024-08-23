import { renderHook } from "@testing-library/react"
import useCounter from "./useCounter"
import { act } from "react";
// act 的位置存在疑问
// @testing-library/react、react-dom/test-utils 被废弃
// react 中的刚刚好

test('useCounter', async () => {
    const { result, unmount }  = renderHook(() => useCounter(0));

    const [count, increment, decrement]  = result.current;

    act(() => {
        increment(2);
    });

    expect(result.current[0]).toBe(2);

    act(() => {
        decrement(3)
    })

    expect(result.current[0]).toBe(-1);

    unmount();
});