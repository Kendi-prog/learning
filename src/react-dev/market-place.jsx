import { useState } from "react";

export default function MarketPlace() {
    const [isPending, setIsPending] = useState(0);
    const [isCompleted, setIsCompleted] = useState(0);

    const handleClick = () => {
        setIsPending(isPending + 1);
        setTimeout(() => {
            setIsCompleted(isCompleted + 1);
            setIsPending(isPending => isPending - 1);
        }, 3000);
    }

    return (
        <div>
            <h1>Pending : {isPending}</h1>
            <h1>Completed: {isCompleted}</h1>
            <button onClick={handleClick}>Buy</button>
        </div>
    )
}