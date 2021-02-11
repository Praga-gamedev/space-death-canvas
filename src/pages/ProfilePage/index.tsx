import React, { FC, memo, useState, useMemo } from 'react';
import {
    ProfileContainer,
    Title,
    ProfileContent,
    ProfilePaper,
    Avatar,
    UploadPhotoButton,
    AlignCenterColumn,
    ProfileField,
    FormBlock,
} from './units';

import { Button, Input } from '@components';
import { Stats } from './components/Stats';

import { profileFormFields, getInitialProfileForm } from './fields';
import { defaultStats } from './stats';
import { IProfileForm } from './types';

export const ProfilePage: FC = memo(() => {
    const initialProfileForm = useMemo(getInitialProfileForm, []);
    const [profileForm, setProfileForm] = useState(initialProfileForm);

    const profileFormHandler = (name: keyof IProfileForm) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value;
        setProfileForm({ ...profileForm, [name]: value });
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

                    <Button style={{ marginTop: '30px' }}>
                        Сменить пароль
                    </Button>
                </AlignCenterColumn>

                <FormBlock>
                    {profileFormFields.map(({ name, label }) => (
                        <ProfileField key={name}>
                            <Input
                                value={profileForm[name]}
                                label={label}
                                onChange={profileFormHandler(name)}
                            />
                        </ProfileField>
                    ))}

                    <Button style={{ marginTop: '60px' }}>Сохранить</Button>
                </FormBlock>

                <Stats stats={defaultStats} />
            </ProfileContent>
        </ProfileContainer>
    );
});
