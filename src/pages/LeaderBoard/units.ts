import styled from '@emotion/styled';
import { Paper } from '@components';
import { scrollBarStyle } from '@pages/units';

export const StyledPaper = styled(Paper)`
    margin: 0 auto;
`;

export const DataWindow = styled.div`
    height: auto;
    width: 90%;
    max-height: 70%;
    margin: 15% auto 0 auto;
    border-radius: 15px;
    overflow-y: auto;
    font-family: 'Comfortaa', sans-serif;

    ${scrollBarStyle}
`;
