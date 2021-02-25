import React, { FC, memo, useCallback, useEffect, useRef } from 'react';
import { useActions } from 'kea';

import { history } from '@store/initStore';
import { logic } from '@store/AuthPage';

import { S } from './units';
import { IPopupProps } from './types';

export const Popup: FC<IPopupProps> = memo(({ buttonRef, isOpen, setOpen }) => {
    const { logOut } = useActions(logic);

    const popupRef = useRef();

    const handleBodyClick = (target: EventTarget | null): void => {
        const condition =
            target !== popupRef.current && target !== buttonRef.current;

        condition && setOpen(false);
    };

    const redirectToProfile = useCallback(() => {
        history.push('/profile');

        setOpen(false);
    }, []);

    const logoutClick = useCallback(async () => {
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

            <S.PopupItem onClick={logoutClick}>Выйти</S.PopupItem>
        </S.Popup>
    );
});
