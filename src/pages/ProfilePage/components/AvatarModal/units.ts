import styled from '@emotion/styled';

import { Button } from '@components';

import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

S.AvatarModalContent = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

S.AvatarModalTitle = styled.h3`
    margin: 0;
    font-size: 24px;
`;

S.InputFile = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
`;

S.InputFileLabel = styled.label`
    display: block;
    font-size: 18px;
    text-align: center;
    text-decoration-line: underline;
    color: ${(props: ThemeType) => props.theme.blue};
    cursor: pointer;
`;

S.InputFileName = styled.div`
    font-size: 18px;
    line-height: 16px;
    text-align: center;
    max-width: 200px;
    word-break: break-all;
`;

S.SaveButton = styled(Button)`
    background-color: ${(props: { disabled: boolean } & ThemeType) =>
        props.disabled ? props.theme.GrayScale_50 : props.theme.blue};
`;
