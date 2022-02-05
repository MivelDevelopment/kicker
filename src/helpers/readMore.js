import { useState } from 'react';

export const ReadMoreDescription = (string) => {
    const [isFullDescription, setIsFullDescription] = useState(false);
    const shortDescription = string.split(' ').slice(0, 20).join(' ')

    const ToggleReadMore = () => {
        setIsFullDescription(!isFullDescription)
    }
    return {shortDescription, isFullDescription, ToggleReadMore}
}