import { useState, useEffect, useRef } from 'react';

export const ScrollingDown = () => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const prevPosition = useRef();

    useEffect(() => {
        const scrollHandler = () => {
            prevPosition.current = currentPosition;
            setCurrentPosition(window.scrollY);
        }
        
        window.addEventListener('scroll', scrollHandler);
        
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [currentPosition])
    

   return currentPosition < prevPosition.current || !prevPosition.current
}