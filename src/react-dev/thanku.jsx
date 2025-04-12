import { useState } from "react";

export default function ThankYou () {
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false);

    const handleClick = () => {
        alert(`Sending ${message}`);
        setIsSent(true);
    }

    return (
        <div>                                                                                                                                           
             {!isSent ? (
                <>
                    <textarea 
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={handleClick}>Send</button>   
                </>
               
            ) : (
                <h1>Thank you for the message</h1>
            )
     }
       
                    
        
        </div>
    )
}