import styled from '@emotion/styled';

import { Button } from '@components';

import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

S.ForumButton = styled(Button)`
    background-color: ${(props: { isClicked: boolean } & ThemeType) => {
        return props.isClicked ? props.theme.blue : props.theme.GrayScale_20;
    }};

    margin-bottom: 24px;
    height: 70px;
    width: 85%;
    border: none;
`;
