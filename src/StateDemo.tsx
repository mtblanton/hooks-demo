import React from 'react';
import useCounter from './use-counter';

const StateDemo = () => {
    const [count, incrementCounter, decrementCounter] = useCounter();

    return (
        <div id="Counter">
          <p>Counter: {count}</p>
          <button onClick={decrementCounter}>-</button>
          <button onClick={incrementCounter}>+</button>
        </div>
    )
}

export default StateDemo;