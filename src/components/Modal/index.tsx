import React, { FC, memo, useRef } from 'react';
import { IModalProps } from './types';

import { S } from './units';

export const Modal: FC<IModalProps> = memo(({ show, onClose, children }) => {
    const overlayRef = useRef();

    const close = (event: Event) => {
        if (event.target === overlayRef.current) {
            onClose();
        }
    };

    return (
        <S.ModalOverlay show={show} ref={overlayRef} onClick={close}>
            <S.ModalBody>{children}</S.ModalBody>
        </S.ModalOverlay>
    );
});
