import React, { useCallback } from 'react';
import { history } from '@store/initStore';
import {
    ButtonBlock,
    HeaderButton,
    MainBlock,
    ThemeBlock,
    UsernameBlock,
} from '@pages/ForumPage/components/ForumThreadDialog/Header/units';

export const Header = () => {
    const redirectForum = useCallback(() => history.push('/forum/'), []);
    return (
        <MainBlock>
            <ButtonBlock>
                <HeaderButton onClick={redirectForum} />
            </ButtonBlock>
            <UsernameBlock>
                <span>spark888</span>
            </UsernameBlock>
            <ThemeBlock>
                <span>Как убить летающего короля-бобра?</span>
            </ThemeBlock>
        </MainBlock>
    );
};
