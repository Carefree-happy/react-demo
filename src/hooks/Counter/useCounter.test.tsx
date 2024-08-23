import { act, renderHook } from "@testing-library/react"
import useCounter from "./useCounter"

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