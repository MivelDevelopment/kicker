import { useState, useEffect } from 'react';

export const ScrollingDown = () => {
    const [lastTwoPositions, setLastTwoPositions] = useState([]);

    const scrollHandler = () => {
        const position = window.scrollY;
        setLastTwoPositions(prev => {
            return prev.length < 2 ? [...prev, position] : [prev[1], position]
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return lastTwoPositions[1] < lastTwoPositions[0] || !lastTwoPositions[0]
}