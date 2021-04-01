import React, { FC, memo, useCallback, useEffect, useRef } from 'react';

import { useHistory } from 'react-router';
import { useActions, useValues } from 'kea';

import Switch from '@material-ui/core/Switch';

import { logic } from '@store/AuthPage';

import { S } from './units';
import { IPopupProps } from './types';
import { THEME } from '../../../theme';

export const Popup: FC<IPopupProps> = memo(({ buttonRef, isOpen, setOpen }) => {
    const { theme } = useValues(logic);
    const { logOut, toggleTheme } = useActions(logic);

    const popupRef = useRef();
    const switchRef = useRef();

    const history = useHistory();

    const handleBodyClick = (target: EventTarget | null): void => {
        const condition =
            target !== popupRef.current &&
            target !== buttonRef.current &&
            target !== switchRef.current;
        if (condition) {
            setOpen(false);
        }
    };

    const redirectToProfile = useCallback(() => {
        history.push('/profile');

        setOpen(false);
    }, []);

    const handleLogoutClick = useCallback(async () => {
        await logOut();
    }, []);

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

    return (
        <S.Popup ref={popupRef} isOpen={isOpen}>
            <S.PopupItem onClick={redirectToProfile}>Профиль</S.PopupItem>

            <S.PopupItem onClick={handleLogoutClick}>Выйти</S.PopupItem>

            <S.PopupItem style={{ marginLeft: '10%' }}>
                Темная тема
                <Switch
                    inputRef={switchRef}
                    checked={theme === THEME.DARK}
                    onChange={() => toggleTheme()}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </S.PopupItem>
        </S.Popup>
    );
});
