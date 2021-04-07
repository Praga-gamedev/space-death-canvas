import React, { FC, memo, useCallback, useEffect, useRef } from 'react';

import { useHistory } from 'react-router';
import { useActions, useValues } from 'kea';

import Switch from '@material-ui/core/Switch';

import { logic } from '@store/AuthPage';

import { S } from './units';
import { IPopupProps } from './types';
import { THEME } from 'src/theme';
import { setUserTheme } from '@api/theme';

export const Popup: FC<IPopupProps> = memo(({ buttonRef, isOpen, setOpen }) => {
    const { theme, user } = useValues(logic);
    const { logOut, toggleTheme } = useActions(logic);

    const popupRef = useRef();
    const switchRef = useRef();

    const history = useHistory();

    const handleBodyClick = (target: EventTarget | null): void => {
        const condition =
            target !== popupRef.current && target !== buttonRef.current;
        // &&
        // target !== switchRef.current;

        if (condition) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener('click', ({ target }) =>
            handleBodyClick(target)
        );

        return () => {
            document.body.removeEventListener('click', ({ target }) =>
                handleBodyClick(target)
            );
        };
    }, []);

    const redirectToProfile = useCallback(() => {
        history.push('/profile');

        setOpen(false);
    }, []);

    const handleLogoutClick = useCallback(async () => {
        await logOut();
    }, []);

    const handleChangeTheme = useCallback(async () => {
        toggleTheme();

        const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;

        await setUserTheme(user.login, newTheme);
    }, [theme, user]);

    return (
        <S.Popup ref={popupRef} isOpen={isOpen}>
            <S.PopupItem onClick={redirectToProfile}>Профиль</S.PopupItem>

            <S.PopupItem style={{ marginLeft: '10%' }}>
                Темная тема
                <Switch
                    color="primary"
                    inputRef={switchRef}
                    checked={theme === THEME.DARK}
                    onChange={handleChangeTheme}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </S.PopupItem>

            <S.PopupItem onClick={handleLogoutClick}>Выйти</S.PopupItem>
        </S.Popup>
    );
});
