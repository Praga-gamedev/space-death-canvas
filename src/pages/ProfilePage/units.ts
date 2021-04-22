import styled from '@emotion/styled';

import { Button } from '@components';

import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

S.ProfileContainer = styled.div`
    padding: 170px 0 80px;
    height: 100vh;
    background-color: ${(props: ThemeType) => props.theme.primary};
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }
`;

S.Title = styled.h1`
    font-size: 48px;
    line-height: 120%;
    color: ${(props: ThemeType) => props.theme.fontSecondary};
    text-align: center;
    margin: 0;
`;

S.AlignCenterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

S.ProfileContent = styled.div`
    margin: 50px auto 0;
    width: 100%;
    max-width: 1220px;
    display: flex;
    justify-content: space-between;
`;

S.ProfilePaper = styled.div`
    padding: 20px;
    background-color: ${(props: ThemeType) => props.theme.secondary};
    border-radius: 15px;
`;

S.AvatarBlock = styled(S.AlignCenterColumn)`
    width: 340px;
`;

S.Avatar = styled.div`
    width: 250px;
    height: 250px;
    background-color: ${(props: ThemeType) => props.theme.GrayScale_0};
    border-radius: 15px;
    position: relative;
    overflow: hidden;

    & img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
`;

S.UploadPhotoButton = styled(Button)`
    margin-top: 20px;
    border-color: ${(props: ThemeType) => props.theme.secondary};
`;
