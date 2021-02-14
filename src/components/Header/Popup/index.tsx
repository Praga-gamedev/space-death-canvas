import React, { FC, useEffect, useRef } from 'react';

import { history } from '@store/initStore';

import { S } from './units';
import { IPopupProps } from './types';

export const Popup: FC<IPopupProps> = ({ buttonRef, isOpen, setOpen }) => {
    const popupRef = useRef();

    useEffect(() => {
        document.body.addEventListener('click', ({ target }) => {
            const condition =
                target !== popupRef.current && target !== buttonRef.current;

            condition && setOpen(false);
        });
    }, []);

    return (
        <S.Popup ref={popupRef} isOpen={isOpen}>
            <S.PopupItem
                onClick={() => {
                    history.push('/profile');

                    setOpen(false);
                }}
            >
                Профиль
            </S.PopupItem>

            <S.PopupItem>Выйти</S.PopupItem>
        </S.Popup>
    );
};
