import styled from '@emotion/styled';

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
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2000;
`;

export const ModalBody = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
    cursor: auto;
    z-index: 2001;
`;
