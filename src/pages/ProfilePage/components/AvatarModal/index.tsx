import React, { FC, memo, useState, ChangeEvent } from 'react';

import { Modal, IModalProps } from '@components';

import { S } from './units';

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
                        onClick={_onSave}
                    >
                        Поменять
                    </S.SaveButton>
                </S.AvatarModalContent>
            </Modal>
        );
    }
);
