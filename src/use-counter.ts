import { useState, useEffect } from 'react';

const useCounter = () : [number, () => void, () => void] => {
    const [count, setCounter] = useState(0);
    const incrementCounter = () => { setCounter(count + 1); };
    const decrementCounter = () => { setCounter(count - 1); };

    useEffect(() => {
        document.title = `Current counter is ${count}`;
    }, [count]);

    return [count, incrementCounter, decrementCounter];
};

export default useCounter;