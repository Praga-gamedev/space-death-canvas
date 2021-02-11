import React, { FC } from 'react';

import { StyledPaper } from './units';

import { IPaperProps } from './types';

export const Paper: FC<IPaperProps> = ({
    w = '50%',
    h = '100%',
    maxw = '700px',
    minw = '500px',
    isRounding,
    children,
    ...rest
}) => (
    <StyledPaper {...{ w, h, maxw, minw, isRounding, ...rest }}>
        {children}
    </StyledPaper>
);
