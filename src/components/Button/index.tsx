import React, { FC } from 'react';

import { S } from './units';
import { IButtonProps } from './types';

export const Button: FC<IButtonProps> = (props) => {
    return <S.Button {...props} />;
};
