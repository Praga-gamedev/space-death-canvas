import styled from '@emotion/styled';

import { Button } from '@components';

import { colors } from 'src/colors';

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
    color: ${colors.secondary};
    cursor: pointer;
`;

S.InputFileName = styled.div`
    font-size: 18px;
    line-height: 16px;
    text-align: center;
    color: #8d8d8d;
    max-width: 200px;
    word-break: break-all;
`;

S.SaveButton = styled(Button)`
    background-color: ${({ disabled }: { disabled: boolean }) =>
        disabled ? colors.GrayScale_50 : colors.secondary};
`;
