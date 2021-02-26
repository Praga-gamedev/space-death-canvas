import styled from '@emotion/styled';

import { colors } from 'src/colors';

import { S as ProfileUnits } from '@pages/ProfilePage/units';

export const S: Record<string, any> = {};

S.FormBlock = styled(ProfileUnits.AlignCenterColumn)`
    margin-top: -8px;
    width: 430px;
`;

S.ProfileField = styled.div`
    width: 100%;

    &:not(:first-of-type) {
        margin-top: 10px;
    }
`;

S.ProfileButtons = styled.div`
    align-self: ${({ withBackButton }: { withBackButton: boolean }) =>
        withBackButton ? 'flex-start' : 'center'};

    margin-top: 40px;
    display: flex;
`;

S.ProfileBackButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: ${colors.secondary};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 12px;
    margin-right: 40px;
    cursor: pointer;
`;
