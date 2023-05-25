import React, {useState} from 'react';
import s from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const dicrement = () => {
        setCount(count - 1)
    }
    return (
        <div className={s.button}>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;