import styled from '@emotion/styled';

import { colors } from 'src/colors';

export const S: Record<string, any> = {};

S.WrapperInput = styled.div`
    width: 100%;
`;

S.Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 20px;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    margin-bottom: 20px;
    color: ${colors.GrayScale_0};
    background-color: ${colors.GrayScale_40};

    &:focus {
        outline-width: 0;
        border: 2px solid ${colors.secondary};
    }
`;

S.Span = styled.span`
    display: block;
    font-size: 18px;
    margin-bottom: 10px;
    color: ${colors.GrayScale_30};
`;

S.PasswordInput = styled(S.Input)`
    font-size: 24px;
`;
