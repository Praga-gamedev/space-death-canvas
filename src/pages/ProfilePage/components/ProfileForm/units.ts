import styled from '@emotion/styled';
import { colors } from 'src/colors';
import { S as ProfileUnits } from '@pages/ProfilePage/units';

interface IProfileButtonsProps {
    withBackButton: boolean;
}

export const S: Record<string, any> = {};

S.FormBlock = styled(ProfileUnits.AlignCenterColumn)`
    width: 430px;
`;

S.ProfileField = styled.div`
    width: 100%;

    &:not(:first-of-type) {
        margin-top: 30px;
    }
`;

S.ProfileButtons = styled.div`
    margin-top: 60px;
    display: flex;
    align-self: ${({ withBackButton }: IProfileButtonsProps) =>
        withBackButton ? 'flex-start' : 'center'};
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
