import styled from '@emotion/styled';
import { scrollBarStyle } from '@pages/units';

export const DataWindow = styled.div`
    height: auto;
    width: 80%;
    max-height: 60%;
    margin-top: 2%;
    border-radius: 15px;
    overflow-y: auto;
    font-family: 'Comfortaa', sans-serif;

    ${scrollBarStyle}
`;
