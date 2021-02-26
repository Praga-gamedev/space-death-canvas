import React, { useCallback } from 'react';

import { history } from '@store/initStore';

import {
    ButtonBlock,
    HeaderButton,
    MainBlock,
    ThemeBlock,
    ThemeSpan,
    UsernameBlock,
} from './units';

export const Header = () => {
    const redirectForum = useCallback(() => history.push('/forum/'), []);

    return (
        <MainBlock>
            <ButtonBlock>
                <HeaderButton onClick={redirectForum} />
            </ButtonBlock>

            <UsernameBlock>spark888</UsernameBlock>

            <ThemeBlock>
                <ThemeSpan>
                    Как убить летающего короля-бобра? Как убить летающего
                    короля-бобра? Как убить летающего короля-бобра? Как убить
                    летающего короля-бобра? Как убить летающего короля-бобра?
                </ThemeSpan>
            </ThemeBlock>
        </MainBlock>
    );
};
