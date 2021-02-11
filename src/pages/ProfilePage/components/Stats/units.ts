import styled from '@emotion/styled';
import { colors } from 'src/colors';

import { ProfilePaper } from '../../units';

interface IIconWrapperProps {
    color?: string;
}

export const StatTitle = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: ${colors.GrayScale_30};
`;

export const StatPaper = styled(ProfilePaper)`
    min-width: 340px;
    display: flex;
    align-content: center;

    &:not(:first-of-type) {
        margin-top: 20px;
    }
`;

export const IconWrapper = styled(ProfilePaper)`
    width: 50px;
    height: 50px;
    background: ${(props: IIconWrapperProps) =>
        props.color || colors.secondaryAccent};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StatInfo = styled.div`
    margin-left: 20px;
`;

export const StatResult = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    color: #ffffff;
`;

export const StatName = styled(StatTitle)`
    font-size: 16px;
`;
