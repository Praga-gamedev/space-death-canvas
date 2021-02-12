import React, { FC, useCallback } from 'react';
import { history } from '@store/initStore';
import {
    ThemeBlock,
    ThemeContent,
    UsernameBlock,
} from '@pages/ForumPage/components/Theme/units';

import { IThemeProps } from '@pages/ForumPage/components/Theme/types';

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
        <ThemeBlock isEven={isEven} onClick={redirectToMessages}>
            <UsernameBlock>
                <span>{userName}</span>
            </UsernameBlock>
            <ThemeContent>
                <span>{content}</span>
            </ThemeContent>
        </ThemeBlock>
    );
};
