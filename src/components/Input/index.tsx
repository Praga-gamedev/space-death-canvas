import React, { FC } from 'react';

import {
    StyledPasswordInput,
    StyledInput,
    StyledSpan,
    StyledWrapperInput,
} from './units';
import { IInputProps } from './types';

export const Input: FC<IInputProps> = ({ label, ...inputProps }) => {
    return (
        <StyledWrapperInput>
            {label && <StyledSpan>{label}</StyledSpan>}
            
            {inputProps.type === 'password' ? (
                <StyledPasswordInput {...inputProps} />
            ) : (
                <StyledInput {...inputProps} />
            )}
        </StyledWrapperInput>
    );
};
