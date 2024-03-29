import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';

import { S as ProfileUnits } from '@pages/ProfilePage/units';

interface IIconWrapperProps {
    color?: string;
}

export const S: Record<string, any> = {};

S.StatBlock = styled.div`
    margin-top: -8px;
`;

S.StatTitle = styled.div`
    font-size: 18px;
    line-height: 20px;
    color: ${(props: ThemeType) => props.theme.GrayScale_30};
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
    background: ${(props: IIconWrapperProps & ThemeType) =>
        props.color || props.theme.lightBlue};

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
    color: ${(props: ThemeType) => props.theme.GrayScale_0};
`;

S.StatName = styled(S.StatTitle)`
    margin-top: 9px;
    font-size: 16px;
`;
