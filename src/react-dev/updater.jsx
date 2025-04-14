import { useState } from "react";

export default function Updater() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <div>{number}</div>
            <button onClick={() => {
                setNumber(number + 5);
                setNumber(n => n + 1);
            }}
            >Increment using Updater function</button>
            <button onClick={() => {
                setNumber(number + 5);
                setNumber(n => n + 1);
                setNumber(42);
            }}
            >Replacing by 42</button>
            
        </>
       
    )
}