import styled from '@emotion/styled';

import { colors } from 'src/colors';

export const StyledPopup = styled.div`
    display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'flex' : 'none')};

    flex-direction: column;
    position: absolute;
    top: 50px;
    right: -50px;
    width: 250px;
    background-color: ${colors.GrayScale_50};
    border: 2px solid ${colors.GrayScale_40};
    border-radius: 15px;
    user-select: none;
    z-index: 10;
`;

export const StyledPopupItem = styled.div`
    padding: 20px;
    color: ${colors.GrayScale_0};
    text-align: center;
    border-bottom: 1px solid ${colors.GrayScale_40};
    font-size: 18px;
    transition: color linear 0.2s;
    cursor: pointer;

    &:hover {
        color: ${colors.secondary};
    }
`;
