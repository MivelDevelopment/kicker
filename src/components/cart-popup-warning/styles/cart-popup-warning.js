import styled from 'styled-components/macro';
import { Container as ContainerDiv } from '../../popup/styles/popup';

export const Container = styled(ContainerDiv)`
    margin-left: auto;
    margin-right: auto;
    padding-top: 0;
    padding-bottom: 0;
`;

export const Icon = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export const Message = styled.h3`
    text-align: center;
    padding: 0 5px;
`;