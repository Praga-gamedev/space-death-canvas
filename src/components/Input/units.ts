import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

S.WrapperInput = styled.div`
    width: 100%;
`;

S.Input = styled.input`
    color: ${(props: ThemeType) => props.theme.fontPrimary};

    background-color: ${(props: ThemeType) => props.theme.secondary};

    &:focus {
        outline-width: 0;
        border: 2px solid ${(props: ThemeType) => props.theme.blue};
    }

    width: 100%;
    height: 50px;
    padding: 0 20px;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    margin-bottom: 20px;
`;

S.Span = styled.span`
    color: ${(props: ThemeType) => props.theme.GrayScale_30};

    display: block;
    font-size: 18px;
    margin-bottom: 10px;
`;

S.PasswordInput = styled(S.Input)`
    font-size: 24px;
`;
