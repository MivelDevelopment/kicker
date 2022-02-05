import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTopOnChange = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const options = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
        window.scrollTo(options)
    }, [location])

    return <>{children}</>
}