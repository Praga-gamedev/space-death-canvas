import styled from '@emotion/styled';
import { colors } from 'src/colors';

import { S as ProfileUnits } from '@pages/ProfilePage/units';

interface IIconWrapperProps {
    color?: string;
}

export const S: Record<string, any> = {};

S.StatTitle = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: ${colors.GrayScale_30};
`;

S.StatPaper = styled(ProfileUnits.ProfilePaper)`
    min-width: 340px;
    display: flex;
    align-content: center;

    &:not(:first-of-type) {
        margin-top: 20px;
    }
`;

S.IconWrapper = styled(ProfileUnits.ProfilePaper)`
    background: ${(props: IIconWrapperProps) =>
        props.color || colors.secondaryAccent};

    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

S.StatInfo = styled.div`
    margin-left: 20px;
`;

S.StatResult = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    color: #ffffff;
`;

S.StatName = styled(S.StatTitle)`
    font-size: 16px;
`;
