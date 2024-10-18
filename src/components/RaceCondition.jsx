import { useState } from "react";
import Button from "./common/Button";
const RaceCondition = () => {
    const [count, setCount] = useState(1);
    const incrementCount = () => {
        setCount(count+1)
    }
    const incrementCountwithDelay = () => {
        setTimeout(() => {
            setCount((prevCount) => prevCount+1)
        }, 3000)
    }
    return (
        <div className="w-full flex">
            <Button clickHandler={incrementCount}> Increment Count</Button>
            <Button clickHandler={incrementCountwithDelay}> Delayed Increment Count</Button>
            Count: {count}
        </div>
    )
}

export default RaceCondition;