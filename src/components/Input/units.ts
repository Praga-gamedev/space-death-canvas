import styled from '@emotion/styled';

import { colors } from 'src/colors';

export const StyledWrapperInput = styled.div`
    width: 100%;
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 20px;
    border: none;
    border-radius: 15px;
    color: ${colors.GrayScale_0};
    background-color: ${colors.GrayScale_40};
    font-size: 16px;

    &:focus {
        outline-width: 0;
        border: 2px solid ${colors.secondary};
    }
`;

export const StyledSpan = styled.span`
    display: block;
    margin-bottom: 10px;
    color: ${colors.GrayScale_30};
`;

export const StyledPasswordInput = styled(StyledInput)`
    font-size: 24px;
`;
