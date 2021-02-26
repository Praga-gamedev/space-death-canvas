import styled from '@emotion/styled';
import { scrollBarStyle } from '@pages/units';

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    max-width: 1000px;
    max-height: 90%;
    margin: 1% auto 0;
`;

export const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
    width: 30%;
    height: 100%;
`;

export const ContentBlock = styled.div`
    width: 70%;
    height: inherit;
`;

export const ThreadsWindow = styled.div`
    width: 90%;
    height: auto;
    max-height: 70%;
    margin: 24px auto 0;
    border-radius: 15px;
    overflow-y: auto;
    font-family: 'Comfortaa', sans-serif;

    ${scrollBarStyle}
`;
