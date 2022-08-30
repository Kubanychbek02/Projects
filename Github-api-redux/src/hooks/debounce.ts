import { useEffect, useState } from "react";

export function useDebounce(value: string, delay: number = 300) {
    const [debounced, setDubounced] = useState(value)

    useEffect(() => {
       const handler = setTimeout(() => setDubounced(value), delay)
       return () => clearTimeout(handler)
    }, [value, delay])

    return debounced
}