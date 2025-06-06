import React, { useState } from 'react';


export default function Button() {
    const [count, setCount] = useState(0);

    const handleClick =  () => {
        setCount(count + 1);
    }

    return(
        <button onClick={handleClick}>My Button count:{count}</button>
    );
}

