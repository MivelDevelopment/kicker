import { useState } from 'react';
import imgArr from '../data/slider-images.json';


export const ImageSlider = (givenArray = imgArr) => {
    const [currentImage, setCurrentImage] = useState(givenArray);

    const nextSlide = () => {
        const lastIndex = imgArr.length - 1;
        const isLastImage = currentImage.id === imgArr[lastIndex].id;
        const currentIndex = imgArr.indexOf(currentImage);
        const nextImage = isLastImage ? imgArr[0] : imgArr[currentIndex + 1];

        setCurrentImage(nextImage);
    };

    const prevSlide = () => {
        const isFirstItem = currentImage.id === imgArr[0].id;
        const lastIndex = imgArr.length - 1;
        const currentIndex = imgArr.indexOf(currentImage);
        const prevImage = isFirstItem ? imgArr[lastIndex] : imgArr[currentIndex - 1];

        setCurrentImage(prevImage);
    };

    return { currentImage, setCurrentImage, nextSlide, prevSlide }
};