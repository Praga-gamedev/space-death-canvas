import React, { FC, memo, useState, useMemo } from 'react';
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
import { ProfileForm, getInitialProfileForm } from './components/ProfileForm';

import { defaultStats } from './stats';

export const ProfilePage: FC = memo(() => {
    const initialFields = useMemo(getInitialProfileForm, []);

    const [fields, setFields] = useState(initialFields);
    const [passwordMode, setPasswordMode] = useState(false);

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
                        onClick={() => setPasswordMode(true)}
                    >
                        Сменить пароль
                    </Button>
                </AlignCenterColumn>

                <ProfileForm
                    fields={fields}
                    onChange={setFields}
                    passwordMode={passwordMode}
                    setPasswordMode={setPasswordMode}
                />

                <Stats stats={defaultStats} />
            </ProfileContent>
        </ProfileContainer>
    );
});
