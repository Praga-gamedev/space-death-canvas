import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';

export const MainBlock = styled.div`
    margin: ${({ isIncoming }: { isIncoming: boolean }) =>
        isIncoming ? '1% 0 1% 5%' : '1% 5% 1% auto'};

    background-color: ${(props: { isIncoming: boolean } & ThemeType) =>
        props.isIncoming ? props.theme.GrayScale_20 : props.theme.lightBlue};

    color: ${(props: { isIncoming: boolean } & ThemeType) =>
        props.isIncoming ? props.theme.GrayScale_0 : props.theme.blue};

    padding: 2px;
    line-height: 30px;
    border-radius: 10px;
    font-size: 15px;
`;

export const UserNameSpan = styled.span`
    color: ${(props: ThemeType) => props.theme.GrayScale_100};

    display: block;
    margin-left: 5px;
    margin-right: 5px;
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
    color: ${(props: ThemeType) => props.theme.GrayScale_100};

    margin: auto 1% 1% 5px;
    line-height: 16px;
`;
