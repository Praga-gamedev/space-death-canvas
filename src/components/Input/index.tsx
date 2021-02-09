import React, { FC } from 'react';

import { StyledPasswordInput, StyledInput, StyledSpan } from './units';
import { IInputProps } from './types';

export const Input: FC<IInputProps> = ({ label, ...inputProps }) => {
    return (
        <>
            {label ? <StyledSpan>{label}</StyledSpan> : null}
            {inputProps.type === 'password' ? (
                <StyledPasswordInput {...inputProps} />
            ) : (
                <StyledInput {...inputProps} />
            )}
        </>
    );
};
