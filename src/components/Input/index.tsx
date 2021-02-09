import React, { FC } from 'react';

import { PasswordStyledInput, StyledInput, StyledSpan } from './units';
import { IInputProps } from './types';

export const Input: FC<IInputProps> = (props) => {
    return (
        <>
            {props.label ? <StyledSpan>{props.label}</StyledSpan> : null}
            {props.type === 'password' ? (
                <PasswordStyledInput {...props} />
            ) : (
                <StyledInput {...props} />
            )}
        </>
    );
};
