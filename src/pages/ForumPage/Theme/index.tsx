import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
    ThemeBlock,
    ThemeContent,
    UsernameBlock,
} from '@pages/ForumPage/Theme/units';

import { IThemeProps } from '@pages/ForumPage/Theme/types';

export const Theme: FC<IThemeProps> = ({
    userName,
    content,
    isEven,
    id,
    ...rest
}) => {
    const history = useHistory();
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
