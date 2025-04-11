import { useState } from "react";


export default function InputStuckFix () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleReset = () => {
        setFirstName("");
        setLastName("");
    }

    return (
        <div>
            <input 
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
            <input 
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
             />
            <h1>Hi, {firstName} {lastName} </h1>
            <button onClick={handleReset}>reset</button>
        </div>
    );
    
}