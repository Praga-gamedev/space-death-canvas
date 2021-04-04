import React, { FC } from 'react';

import { S } from './units';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = (props) => {
    return <S.Button {...props} />;
};
