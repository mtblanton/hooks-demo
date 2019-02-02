import React from 'react';
import useCounter from './use-counter';

const StateDemo = () => {
    const {count, incrementCounter, decrementCounter} = useCounter();

    return (
        <div id="Counter">
          <p>Counter: {count}</p>
          <button onClick={incrementCounter}>+</button>
          <button onClick={decrementCounter}>-</button>
        </div>
    )
}

export default StateDemo;