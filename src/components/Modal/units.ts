import styled from '@emotion/styled';

// пишем везде Styled, то есть StyledModalOverley
export const ModalOverlay = styled.div`
    display: ${({ show }: { show: boolean }) => (show ? 'flex' : 'none')};

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* слишком темная подложка имхо + думаю, можно так же не юзать rgba чтоб использовать colors */
    background-color: rgba(0, 0, 0, 0.7);
    /* не слишком большое число? */
    z-index: 2000;
`;

export const ModalBody = styled.div`
    /* мы используем colors.Grayscale_0 */
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
    cursor: auto;
    z-index: 2001;
`;
