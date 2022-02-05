import { useState } from 'react';

export const DisplayMinicartContents = () => {
    const [isMinicartHovered, setIsMinicartHovered] = useState(false);

    const displayTooltip = e => {
        setIsMinicartHovered(true);
    };

    const hideTooltip = e => {
        setIsMinicartHovered(false);
    };

    return { isMinicartHovered, displayTooltip, hideTooltip}
}