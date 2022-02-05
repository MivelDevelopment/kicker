import styled from 'styled-components/macro';
import { CloseButton } from '../../quickview/styles/quickview';

export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .75);
    left: 0;
    bottom: ${({ open }) => open ? '0' : '-100%'};
    transition: .3s;

    z-index: 1;
`;

export const Container = styled.div`
    position: relative;
    max-width: 600px;
    width: 90%;
    max-height: 70vh;
    
    display: grid;
    padding: 40px 0;
    background-color: #fff;
    border-radius: 10px;
    
    font-size: 1.2rem;
    
    justify-content: space-around;
    overflow-y: auto;
    overflow-x: hidden;

    @media (min-width: 768px) {
        padding: 40px 0;
    }
`;

export const CloseBtn = styled(CloseButton)``;