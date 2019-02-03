import { useState, useEffect } from 'react';

const useCounter = () => {
    const [count, setCounter] = useState(0);
    const incrementCounter = () => { setCounter(count + 1); };
    const decrementCounter = () => { setCounter(count - 1); };

    useEffect(() => {
        document.title = `Current counter is ${count}`;
    }, [count]);

    const returnTuple: [number, () => void, () => void] = [count, incrementCounter, decrementCounter]
    return returnTuple;
};

export default useCounter;