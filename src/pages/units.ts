import styled from '@emotion/styled';

/* Не работает алиас */
// import backgroundPicture from '@images/background.png';

import backgroundPicture from '../assets/images/background.png';

export const StyledWrapperPage = styled.div`
    background-image: ${({ background }: { background: boolean }) =>
        background ? `url(${backgroundPicture})` : 'none'};

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const StyledPaperColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
`;
