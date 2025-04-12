import { useState } from "react";

export default function Snapshot() {
    const [snapShot, setSnapShot] = useState(0);

    return (
        <>
           <h1>{snapShot}</h1>
            <button onClick={() => {
                setSnapShot(snapShot + 1);
                setSnapShot(snapShot + 1);
                setSnapShot(snapShot + 1);
                alert(snapShot);
            }}>
                +3
            </button> 
        </>
        
    )
}