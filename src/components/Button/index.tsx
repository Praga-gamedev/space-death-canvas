import React, { FC } from 'react';

import { StyledButton } from './units';
import { IButtonProps } from './types';

export const Button: FC<IButtonProps> = ({ isLoading = false, ...rest }) => {
    return <StyledButton isLoading={isLoading} {...rest} />;
};
