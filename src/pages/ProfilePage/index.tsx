import React, { FC, memo, useState, useMemo, useEffect } from 'react';
import {
    ProfileContainer,
    Title,
    ProfileContent,
    ProfilePaper,
    Avatar,
    UploadPhotoButton,
    AlignCenterColumn,
} from './units';

import { Button } from '@components';
import { Stats } from './components/Stats';
import {
    ProfileForm,
    getInitialProfileForm,
    getFieldsFromUser,
} from './components/ProfileForm';

import { defaultStats } from './stats';

import { getUser } from 'src/api/auth';
import { updateProfile, updatePassword } from 'src/api/profile';

export const ProfilePage: FC = memo(() => {
    const initialFields = useMemo(getInitialProfileForm, []);

    const [user, setUser] = useState<any>(null);
    const [fields, setFields] = useState(initialFields);
    const [passwordMode, setPasswordMode] = useState(false);

    useEffect(() => {
        getUser()
            .then((user) => {
                setUser(user);
                setFields({ ...fields, ...getFieldsFromUser(user) });
            })
            .catch(console.error);
    }, []);

    const changePasswordMode = (value: boolean) => {
        setPasswordMode(value);

        if (!value) {
            setFields({ ...fields, ...getFieldsFromUser(user) });
        }
    };

    const onSubmit = (data: any) => {
        if (!passwordMode) {
            const _data = { ...user, ...data };
            console.log(_data);
            updateProfile({ ...user, ...data })
                .then(setUser)
                .catch(console.error);
        } else {
            updatePassword(data)
                .then(() => changePasswordMode(false))
                .catch(console.error);
        }
    };

    return (
        <ProfileContainer>
            <Title>Профиль</Title>

            <ProfileContent>
                <AlignCenterColumn>
                    <ProfilePaper>
                        <Avatar />

                        <UploadPhotoButton>
                            + Загрузить новое фото
                        </UploadPhotoButton>
                    </ProfilePaper>

                    <Button
                        style={{ marginTop: '30px' }}
                        onClick={() => changePasswordMode(true)}
                    >
                        Сменить пароль
                    </Button>
                </AlignCenterColumn>

                <ProfileForm
                    fields={fields}
                    onChange={setFields}
                    passwordMode={passwordMode}
                    setPasswordMode={changePasswordMode}
                    onSubmit={onSubmit}
                />

                <Stats stats={defaultStats} />
            </ProfileContent>
        </ProfileContainer>
    );
});
