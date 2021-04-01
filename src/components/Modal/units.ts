import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

S.ModalOverlay = styled.div`
    display: ${({ show }: { show: boolean }) => (show ? 'flex' : 'none')};

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2000;
`;

S.ModalBody = styled.div`
    background-color: ${(props: ThemeType) => props.theme.GrayScale_0};
    padding: 20px;
    border-radius: 15px;
    cursor: auto;
    z-index: 2001;
`;
