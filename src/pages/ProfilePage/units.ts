import styled from '@emotion/styled';
import { colors } from 'src/colors';

import { Button } from '@components';

export const ProfileContainer = styled.div`
    margin-top: 80px;
    padding: 90px 0 80px;
    height: calc(100vh - 80px);
    overflow-y: auto;
    background-color: ${colors.GrayScale_50};
`;

export const Title = styled.h1`
    font-size: 48px;
    line-height: 120%;
    color: ${colors.GrayScale_20};
    text-align: center;
    margin: 0;
`;

export const AlignCenterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileContent = styled.div`
    margin: 50px auto 0;
    width: 100%;
    max-width: 1220px;
    display: flex;
    justify-content: space-between;
`;

export const ProfilePaper = styled.div`
    padding: 20px;
    background-color: #1c1c24;
    border-radius: 15px;
`;

export const Avatar = styled.div`
    width: 250px;
    height: 250px;
    background-color: #fff;
    border-radius: 15px;
    position: relative;

    & img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
`;

export const UploadPhotoButton = styled(Button)`
    margin-top: 20px;
    border-color: #2d2d3a;
`;

export const FormBlock = styled(AlignCenterColumn)`
    width: 430px;
`;

export const ProfileField = styled.div`
    width: 100%;

    &:not(:first-of-type) {
        margin-top: 30px;
    }
`;
