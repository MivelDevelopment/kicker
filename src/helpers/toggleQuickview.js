import { useState } from 'react';

export const ToggleQuickview = () => {
    const [isOpenQuickview, setIsOpenQuickview] = useState(false);

    const toggleQuickviewDisplay = (e) => {
        const isQuickviewContainer = e.target.closest('.quickview-content');
        const isProductImage = e.target.closest('.grid-product-image');
        const isCloseButton = e.target.closest('.close-quickview');

        isCloseButton ? setIsOpenQuickview(false)
            : isQuickviewContainer || isProductImage ? setIsOpenQuickview(true)
                : setIsOpenQuickview(false);
    }

    return { isOpenQuickview, setIsOpenQuickview, toggleQuickviewDisplay }
}