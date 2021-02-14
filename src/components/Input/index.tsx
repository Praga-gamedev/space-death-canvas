import React, { FC } from 'react';

import { S } from './units';
import { IInputProps } from './types';

export const Input: FC<IInputProps> = ({ label, ...inputProps }) => {
    return (
        <S.WrapperInput>
            {label && <S.Span>{label}</S.Span>}

            {inputProps.type === 'password' ? (
                <S.PasswordInput {...inputProps} />
            ) : (
                <S.Input {...inputProps} />
            )}
        </S.WrapperInput>
    );
};
