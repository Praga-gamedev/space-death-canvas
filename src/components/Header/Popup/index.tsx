import React, { FC, useEffect, useRef } from 'react';

import { history } from '@store/initStore';

import { IPopupProps } from './types';
import { StyledPopup, StyledPopupItem } from './units';

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
        <StyledPopup ref={popupRef} isOpen={isOpen}>
            <StyledPopupItem
                onClick={() => {
                    history.push('/profile');

                    setOpen(false);
                }}
            >
                Профиль
            </StyledPopupItem>

            <StyledPopupItem>Выйти</StyledPopupItem>
        </StyledPopup>
    );
};
