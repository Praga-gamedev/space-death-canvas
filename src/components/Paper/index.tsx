import React, { FC, memo } from 'react';

import { S } from './units';
import { IPaperProps } from './types';

export const Paper: FC<IPaperProps> = memo(
    ({
        w = '50%',
        h = '100%',
        maxw = '700px',
        minw = '500px',
        isRounding,
        children,
        ...rest
    }) => (
        <S.Paper {...{ w, h, maxw, minw, isRounding, ...rest }}>
            {children}
        </S.Paper>
    )
);
