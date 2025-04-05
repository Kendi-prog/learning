import { useState } from "react";
import { sculptureList } from "../../data";
import "./art.styles.css";

type Sculpture = {
    name: string;
    artist: string;
    url: string;
    alt: string;
    description: string;
}


export default function Art() {
    const [index, setIndex] = useState(0);
    const[showMore, setShowMore] = useState(false);

    const next = index < sculptureList.length - 1;
    const previous = index > 0;

    const handleNextClick = () => {
        if(next) {
            setIndex(index + 1);
        }
       
    }

    const handlePreviousClick = () => {
        if(previous) {
            setIndex(index - 1);
        } 
    }

    const handleShowMoreClick = () => {
        setShowMore(!showMore);
    }

    const sculpture : Sculpture =  sculptureList[index] ;
    return(
        <div className="art">
            <h2>{sculpture.name}</h2>
            <h3>{sculpture.artist}</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <button onClick={handleShowMoreClick}>
                {showMore ? "Hide details" : "Show details"}
            </button>
            {showMore && <p>{sculpture.description}</p>}
           
            <h3>({index + 1} of {sculptureList.length})</h3>
            <div className="buttons">
                <button onClick={handleNextClick}  disabled={!next}>
                    Next
                </button>
                <button onClick={handlePreviousClick} disabled={!previous}>
                    Previous
                </button>
            </div>
            
            
        </div>
    )
}