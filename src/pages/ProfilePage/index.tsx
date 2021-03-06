import React, { FC, memo, useState, useMemo, useEffect } from 'react';

import { Button } from '@components';

import { Stats } from './components/Stats';
import {
    ProfileForm,
    getInitialProfileForm,
    getFieldsFromUser,
} from './components/ProfileForm';
import { AvatarModal } from './components/AvatarModal';

import { HOST } from 'src/utils/Api';

import { S } from './units';
import { defaultStats } from './stats';

import { logic } from '@store/AuthPage';
import { useActions, useValues } from 'kea';

export const ProfilePage: FC = memo(() => {
    const initialFields = useMemo(getInitialProfileForm, []);

    const [fields, setFields] = useState(initialFields);
    const [passwordMode, setPasswordMode] = useState(false);
    const [showAvatarModal, setShowAvatarModal] = useState(false);

    const { updateProfile, updatePassword, updateAvatar } = useActions(logic);
    const { user } = useValues(logic);

    const avatar = user?.avatar ? `${HOST}${user.avatar}` : '';

    useEffect(() => {
        setFields({ ...fields, ...getFieldsFromUser(user) });
    }, [user]);

    const changePasswordMode = (value: boolean) => {
        setPasswordMode(value);

        !value && setFields({ ...fields, ...getFieldsFromUser(user) });
    };

    const onSubmit = async (data: any) => {
        try {
            if (!passwordMode) {
                await updateProfile(data);
            } else {
                await updatePassword(data);

                changePasswordMode(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onUpdateAvatar = async (file: File) => {
        setShowAvatarModal(false);

        try {
            await updateAvatar(file);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <S.ProfileContainer>
            <S.Title>Профиль</S.Title>

            <S.ProfileContent>
                <S.AvatarBlock>
                    <S.ProfilePaper>
                        <S.Avatar>{avatar && <img src={avatar} />}</S.Avatar>

                        <S.UploadPhotoButton
                            onClick={() => setShowAvatarModal(true)}
                        >
                            + Загрузить новое фото
                        </S.UploadPhotoButton>
                    </S.ProfilePaper>

                    {!passwordMode && (
                        <Button
                            style={{ marginTop: '30px' }}
                            onClick={() => changePasswordMode(true)}
                        >
                            Сменить пароль
                        </Button>
                    )}
                </S.AvatarBlock>

                <ProfileForm
                    fields={fields}
                    onChange={setFields}
                    passwordMode={passwordMode}
                    setPasswordMode={changePasswordMode}
                    onSubmit={onSubmit}
                />

                <Stats stats={defaultStats} />
            </S.ProfileContent>

            <AvatarModal
                show={showAvatarModal}
                onClose={() => setShowAvatarModal(false)}
                onSave={onUpdateAvatar}
            />
        </S.ProfileContainer>
    );
});
