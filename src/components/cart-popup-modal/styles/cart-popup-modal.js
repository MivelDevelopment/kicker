import styled from 'styled-components/macro';
import { TotalPrice as TotalPriceEl } from '../../minicart/styles/minicart';

export const Container = styled.div``;

export const ModalTitle = styled.h2`
    text-align: center;
    margin-top: 0;
`;

export const ItemContainer = styled.div`
    max-height: 60vh;
    overflow-Y: auto;
    
    & > .product-list-item:not(:last-of-type) {
        border-bottom: 1px solid #e2e2e2;
    }
`;

export const TotalPrice = styled(TotalPriceEl)`
    
`;