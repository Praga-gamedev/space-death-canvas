import React, { FC, memo, useRef } from 'react';
import { IModalProps } from './types';

import { ModalBody, ModalOverlay } from './units';

export const Modal: FC<IModalProps> = memo(({ show, onClose, children }) => {
    const overlayRef = useRef();

    const close = (event: Event) => {
        if (event.target === overlayRef.current) {
            onClose();
        }
    };

    return (
        <ModalOverlay show={show} ref={overlayRef} onClick={close}>
            <ModalBody>{children}</ModalBody>
        </ModalOverlay>
    );
});
