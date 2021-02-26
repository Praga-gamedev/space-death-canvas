import React, { FC, memo, useState, ChangeEvent } from 'react';

import { Modal, IModalProps } from '@components';

import { S } from './units';

export interface IAvatarModalProps extends IModalProps {
    onSave: (file: File) => void;
}

export const AvatarModal: FC<IAvatarModalProps> = memo(
    ({ show, onClose, onSave }) => {
        const [file, setFile] = useState<File | null>(null);

        const handleClose = () => {
            setFile(null);
            onClose();
        };

        const handleSave = () => {
            if (!file) return;

            onSave(file);
            handleClose();
        };

        const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
            const files = event.target.files;
            const firstFile = files && files[0];

            setFile(firstFile);
        };

        return (
            <Modal show={show} onClose={handleClose}>
                <S.AvatarModalContent>
                    <S.AvatarModalTitle>
                        Загрузите изображение
                    </S.AvatarModalTitle>

                    <div style={{ marginTop: '50px' }}>
                        <S.InputFile
                            type="file"
                            id="upload_avatar"
                            accept="image/*"
                            onChange={onFileUpload}
                        />

                        {file ? (
                            <S.InputFileName>{file.name}</S.InputFileName>
                        ) : (
                            <S.InputFileLabel htmlFor="upload_avatar">
                                Загрузите изображение
                            </S.InputFileLabel>
                        )}
                    </div>

                    <S.SaveButton
                        style={{ marginTop: '30px' }}
                        disabled={!file}
                        onClick={handleSave}
                    >
                        Поменять
                    </S.SaveButton>
                </S.AvatarModalContent>
            </Modal>
        );
    }
);
