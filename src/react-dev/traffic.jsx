import { useState } from "react";

export default function Traffic() {
    const [walk, setWalk] = useState(true);

    const handleClick = () => {
        alert(walk ? "Stop is Next" : "Walk is Next");
        setWalk(!walk);
        
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to {walk ? "stop" : "walk"}
            </button>
            <h1 style={{
                color: walk ? "darkgreen" : "darkred"
            }}>
                { walk ? "Walk" : "Stop"}
            </h1>
        </>
    )
}