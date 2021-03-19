import React, { FC, memo, useCallback, useEffect, useRef } from 'react';
import { useActions } from 'kea';

import { logic } from '@store/AuthPage';

import { S } from './units';
import { IPopupProps } from './types';
import { useHistory } from 'react-router';

export const Popup: FC<IPopupProps> = memo(({ buttonRef, isOpen, setOpen }) => {
    const { logOut } = useActions(logic);

    const popupRef = useRef();

    const history = useHistory();

    const handleBodyClick = (target: EventTarget | null): void => {
        const condition =
            target !== popupRef.current && target !== buttonRef.current;

        condition && setOpen(false);
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
        </S.Popup>
    );
});
