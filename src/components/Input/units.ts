import styled from '@emotion/styled';

export const StyledInput = styled.input`
    width: 430px;
    height: 50px;

    padding: 0 20px 0 20px;

    border: none;
    border-radius: 15px;
    color: #fff;
    background: #2d2d3a;

    font-size: 16px;

    &:focus {
        outline-width: 0;
        border: 2px solid #4447e2;
    }
`;

export const StyledSpan = styled.span`
    display: block;

    margin-bottom: 10px;

    color: #5f5f6e;
`;

export const PasswordStyledInput = styled(StyledInput)`
    font-size: 25px;
`;
