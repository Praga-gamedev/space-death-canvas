import React, { FC, memo, useState, ChangeEvent } from 'react';

import {
    AvatarModalContent,
    AvatarModalTitle,
    InputFile,
    InputFileLabel,
    InputFileName,
    SaveButton,
} from './units';
import { Modal, IModalProps } from '@components';

export interface IAvatarModalProps extends IModalProps {
    onSave: (file: File) => void;
}

export const AvatarModal: FC<IAvatarModalProps> = memo(
    ({ show, onClose, onSave }) => {
        const [file, setFile] = useState<File | null>(null);

        const _onClose = () => {
            setFile(null);
            onClose();
        };

        const _onSave = () => {
            if (!file) return;

            onSave(file);
            _onClose();
        };

        const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
            const files = event.target.files;
            const firstFile = files && files[0];

            setFile(firstFile);
        };

        return (
            <Modal show={show} onClose={_onClose}>
                <AvatarModalContent>
                    <AvatarModalTitle>Загрузите изображение</AvatarModalTitle>

                    <div style={{ marginTop: '50px' }}>
                        <InputFile
                            type="file"
                            id="upload_avatar"
                            accept="image/*"
                            onChange={onFileUpload}
                        />

                        {file ? (
                            <InputFileName>{file.name}</InputFileName>
                        ) : (
                            <InputFileLabel htmlFor="upload_avatar">
                                Загрузите изображение
                            </InputFileLabel>
                        )}
                    </div>

                    <SaveButton
                        style={{ marginTop: '30px' }}
                        disabled={!file}
                        onClick={_onSave}
                    >
                        Поменять
                    </SaveButton>
                </AvatarModalContent>
            </Modal>
        );
    }
);
