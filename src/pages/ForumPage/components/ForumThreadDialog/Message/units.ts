import styled from '@emotion/styled';
import { colors } from 'src/colors';

export const MainBlock = styled.div`
    margin: ${({ isIncoming }: { isIncoming: boolean }) =>
        isIncoming ? '1% 0 1% 5%' : '1% 5% 1% auto'};

    background-color: ${({ isIncoming }: { isIncoming: boolean }) =>
        isIncoming ? colors.GrayScale_20 : colors.secondaryAccent};

    color: ${({ isIncoming }: { isIncoming: boolean }) =>
        isIncoming ? colors.GrayScale_0 : colors.secondary};

    padding: 2px;
    line-height: 30px;
    border-radius: 10px;
    font-size: 15px;
`;

export const UserNameSpan = styled.span`
    display: block;
    margin-left: 5px;
    margin-right: 5px;
    color: ${colors.GrayScale_100};
`;

export const InfoBlock = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ContentSpan = styled.span`
    margin-left: 15px;
    max-width: 300px;
    padding-bottom: 5px;
`;

export const TimeSpan = styled.span`
    margin: auto 1% 1% 5px;
    line-height: 16px;
    color: ${colors.GrayScale_100};
`;
