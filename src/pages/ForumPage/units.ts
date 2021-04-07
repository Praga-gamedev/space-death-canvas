import styled from '@emotion/styled';
import { scrollBarStyle } from '@pages/units';

export const S: Record<string, any> = {};

S.NewThemeFlex = styled.form`
    display: flex;
    justify-content: space-between;
`

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
