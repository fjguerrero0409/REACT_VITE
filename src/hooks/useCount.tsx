import { useState } from "react";


export default function useCount() {
    const [count, setCount] = useState(0)

    const handleClickPlus = () => {
        setCount(prevCount => prevCount + 1)
    }

    const handleClickLess = () => {
        setCount(prevCount => prevCount - 1)
    }
    return { count, handleClickLess, handleClickPlus }
}