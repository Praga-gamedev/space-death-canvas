import React, { FC, memo, useState, useMemo, useEffect } from 'react';
import { S } from './units';

import { Button } from '@components';
import { Stats } from './components/Stats';
import {
    ProfileForm,
    getInitialProfileForm,
    getFieldsFromUser,
} from './components/ProfileForm';
import { AvatarModal } from './components/AvatarModal';

import { defaultStats } from './stats';

import { getUser } from 'src/api/auth';
import { updateProfile, updatePassword, updateAvatar } from 'src/api/profile';
import { HOST } from 'src/utils/Api';

export const ProfilePage: FC = memo(() => {
    const initialFields = useMemo(getInitialProfileForm, []);

    const [user, setUser] = useState<any>(null);
    const [fields, setFields] = useState(initialFields);
    const [passwordMode, setPasswordMode] = useState(false);

    const [showAvatarModal, setShowAvatarModal] = useState(false);

    const avatar = user?.avatar ? `${HOST}${user.avatar}` : '';

    useEffect(() => {
        (async () => {
            try {
                const user = await getUser();
                setUser(user);
                setFields({ ...fields, ...getFieldsFromUser(user) });
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const changePasswordMode = (value: boolean) => {
        setPasswordMode(value);

        !value && setFields({ ...fields, ...getFieldsFromUser(user) });
    };

    const onSubmit = async (data: any) => {
        try {
            if (!passwordMode) {
                const newUser = await updateProfile({ ...user, ...data });
                setUser(newUser);
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

        const formData = new FormData();
        formData.append('avatar', file);

        try {
            const newUser = await updateAvatar(formData);
            setUser(newUser);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <S.ProfileContainer>
            <S.Title>Профиль</S.Title>

            <S.ProfileContent>
                <S.AlignCenterColumn>
                    <S.ProfilePaper>
                        <S.Avatar>{avatar && <img src={avatar} />}</S.Avatar>

                        <S.UploadPhotoButton
                            onClick={() => setShowAvatarModal(true)}
                        >
                            + Загрузить новое фото
                        </S.UploadPhotoButton>
                    </S.ProfilePaper>

                    <Button
                        style={{ marginTop: '30px' }}
                        onClick={() => changePasswordMode(true)}
                    >
                        Сменить пароль
                    </Button>
                </S.AlignCenterColumn>

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
