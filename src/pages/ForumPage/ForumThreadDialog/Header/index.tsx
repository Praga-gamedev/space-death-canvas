import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import {
    ButtonBlock,
    HeaderButton,
    MainBlock,
    ThemeBlock,
    UsernameBlock,
} from '@pages/ForumPage/ForumThreadDialog/Header/units';

export const Header = () => {
    const history = useHistory();
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
