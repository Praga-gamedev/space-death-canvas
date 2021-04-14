import styled from '@emotion/styled';

import cross from '@icons/cross.svg';

export const S: Record<string, any> = {};

S.Delete = styled.div`
    position: absolute;
    width: 16px;
    height: 16px;
    right: 15px;
    background-image: url(${cross});
    background-repeat: no-repeat;
    background-position: center;
    filter: invert(73%) sepia(63%) saturate(4395%) hue-rotate(206deg)
        brightness(101%) contrast(86%);

    &:hover {
        filter: invert(82%) sepia(19%) saturate(7452%) hue-rotate(301deg)
            brightness(104%) contrast(96%);
    }
`;
