import React, { useEffect } from 'react';

import { Slider } from '../components';
import imgArr from '../data/slider-images.json';
import { ImageSlider } from '../helpers/imageSlider';

export const SliderContainer = () => {
    const {
        currentImage,
        setCurrentImage,
        nextSlide,
        prevSlide
    } = ImageSlider(imgArr);

    useEffect(() => {
        setCurrentImage(imgArr[0]);
        // React lint is throwing me an error for using useEffect only for when component mounts
        // that is why I added the comment bellow 
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Slider>
            <Slider.ImageHolder>
                <Slider.Image src={currentImage.url} />
                <Slider.BtnHolder>
                    <Slider.PrevBtn onClick={prevSlide}>
                        <Slider.BtnBox>
                            <Slider.IconHolder>
                                &lt;
                            </Slider.IconHolder>
                        </Slider.BtnBox>
                    </Slider.PrevBtn>

                    <Slider.CTAContainer>
                        {currentImage.caption && <Slider.ImageCaption>{currentImage.caption}</Slider.ImageCaption>}
                    </Slider.CTAContainer>

                    <Slider.NextBtn onClick={nextSlide}>
                        <Slider.BtnBox>
                            <Slider.IconHolder>
                                &gt;
                            </Slider.IconHolder>
                        </Slider.BtnBox>
                    </Slider.NextBtn>
                </Slider.BtnHolder>
            </Slider.ImageHolder>
        </Slider>
    )
}