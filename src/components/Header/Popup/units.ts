import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

S.Popup = styled.div`
    display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'flex' : 'none')};

    background-color: ${(props: ThemeType) => props.theme.primary};

    border: 2px solid ${(props: ThemeType) => props.theme.secondary};

    flex-direction: column;
    position: absolute;
    top: 50px;
    right: -50px;
    width: 250px;
    border-radius: 15px;
    user-select: none;
    z-index: 10;
`;

S.PopupItem = styled.div`
    color: ${(props: ThemeType) => props.theme.fontPrimary};

    border-bottom: 1px solid ${(props: ThemeType) => props.theme.secondary};

    cursor: pointer;

    &:hover {
        color: ${(props: ThemeType) => props.theme.blue};
    }

    padding: 20px;
    text-align: center;
    font-size: 18px;
    transition: color linear 0.2s;
`;
