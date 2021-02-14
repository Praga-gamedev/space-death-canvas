import React, { FC, useCallback } from 'react';

import { history } from '@store/initStore';

import { MainBlock, ThemeBlock, ThemeSpan, UsernameBlock } from './units';
import { IThemeProps } from './types';

export const Theme: FC<IThemeProps> = ({
    userName,
    content,
    isEven,
    id,
    ...rest
}) => {
    const redirectToMessages = useCallback(() => history.push(`/forum/${id}`), [
        id,
    ]);

    return (
        <MainBlock isEven={isEven} onClick={redirectToMessages}>
            <UsernameBlock>
                <span>{userName}</span>
            </UsernameBlock>

            <ThemeBlock>
                <ThemeSpan>{content}</ThemeSpan>
            </ThemeBlock>
        </MainBlock>
    );
};
