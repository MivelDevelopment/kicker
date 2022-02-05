import React from 'react';
import { 
    Container,
    ImageHolder,
    Image,
    BtnHolder,
    CTAContainer,
    ImageCaption,
    NextBtn,
    PrevBtn,
    BtnBox,
    IconHolder
} from './styles/slider';

const Slider = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

Slider.ImageHolder = ({ children, ...restProps }) => {
    return <ImageHolder {...restProps}>{children}</ImageHolder>
}

Slider.Image = ({ src, alt, author, unsplash, ...restProps }) => {
    return <Image src={src} alt={alt} data-image-author={author} data-author-unsplash={unsplash} {...restProps} />
}

Slider.BtnHolder = ({ children, ...restProps }) => {
    return <BtnHolder {...restProps}>{children}</BtnHolder>
}

Slider.CTAContainer = ({ children, ...restProps}) => {
    return <CTAContainer {...restProps}>{children}</CTAContainer>
}

Slider.ImageCaption = ({ children, ...restProps}) => {
    return <ImageCaption {...restProps}>{children}</ImageCaption>
}

Slider.PrevBtn = ({ children, ...restProps }) => {
    return <PrevBtn {...restProps}>{children}</PrevBtn>
}

Slider.NextBtn = ({ children, ...restProps }) => {
    return <NextBtn {...restProps}>{children}</NextBtn>
}

Slider.BtnBox = ({ children, ...restProps }) => {
    return <BtnBox {...restProps}>{children}</BtnBox>
}

Slider.IconHolder = ({ children, ...restProps }) => {
    return <IconHolder {...restProps}>{children}</IconHolder>
}
export default Slider;