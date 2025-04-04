import { useState } from "react";
import { sculptureList } from "../../data";

export default function Art() {
    const [index, setIndex] = useState(0);

    const handleClick = () => {
        setIndex(index + 1);
    }

    let sculpture =  sculptureList[index];
    return(
        <div className="art">
            <h2>{sculpture.name}</h2>
            <h3>{sculpture.artist}</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>{sculpture.description}</p>
            <p>Current index: {index} of {sculptureList.length}</p>
            <button onClick={handleClick}>
                Next
            </button>
            
        </div>
    )
}