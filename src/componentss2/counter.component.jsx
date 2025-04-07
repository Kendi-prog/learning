import { useState } from 'react';
import './counter.styles.css';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => setCount(count + Number(step));
    const decrement = () => setCount(count - Number(step));
    const reset = () => setCount(0);

    let countClass = '';
    if(count > 0) {
        countClass = 'count-positive';
    } else if(count < 0) {
        countClass = 'count-negative';
    } else {
        countClass = 'count-zero';
    }


    return (
        <div className='counter'>
            <div className='counter-card'>  
                <h1>Counter</h1>
                <h2 >Count: <span className={countClass}>{count}</span></h2>
            </div>
            <h3 className={countClass}>
                {
                    count < 0 ? "Going low!" :
                    count >= 5 && count <= 10 ? "Getting there!" :
                    count > 10 ? "Too high!":
                    ""
                }
            </h3>
            <input 
                type='number'
                value={step}
                onChange={(e) => setStep(e.target.value)}
                placeholder='Step'
            
            />
            <button onClick={increment} className='buttons'>Increment</button>
            <button onClick={decrement} className='buttons'>Decrement</button>
            <button onClick={reset} className='buttons'>Reset</button>
        </div>
    )

}
