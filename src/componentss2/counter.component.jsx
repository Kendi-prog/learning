import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => setCount(count + Number(step));
    const decrement = () => setCount(count - Number(step));
    const reset = () => setCount(0);

    return (
        <div className='counter'>
            <div className='counter-card'>  
                <h1>Counter</h1>
                <h2 >Count: <span className='count'>{count}</span></h2>
            </div>
            <p>
                {
                    count < 0 ? "Going low!" :
                    count >= 5 && count <= 10 ? "Getting there!" :
                    count > 10 ? "Too high!":
                    ""
                }
            </p>
            <input 
                type='number'
                value={step}
                onChange={(e) => setStep(e.target.value)}
                placeholder='Step'
            
            />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}
