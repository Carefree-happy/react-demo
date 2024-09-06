import { useEffect } from "react"

const useLifecyles = (mount: Function, unmount?: Function) => {
    useEffect(() => {
        if (mount) {
            mount()
        }

        return () => {
            if (unmount) {
                unmount()
            }
        }
    }, []);
}

export default useLifecyles;