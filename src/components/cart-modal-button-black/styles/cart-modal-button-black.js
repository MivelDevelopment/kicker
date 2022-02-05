import styled from 'styled-components/macro';
import { AddToCartButton } from '../../add-to-cart-button/styles/addToCartButton'

export const BlackButton = styled(AddToCartButton)`
    &:disabled {
        cursor: not-allowed;

        color: ${({inverse}) => inverse && '#000'};
        background-color: ${({inverse}) => inverse && '#fff'};

        :hover {
            color: ${({inverse}) => inverse && '#000'};
            background-color: ${({inverse}) => inverse && '#fff'};
        }
    }
`;