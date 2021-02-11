import React, { FC, memo, useState, useMemo } from 'react';
import {
    ProfileContainer,
    Title,
    ProfileContent,
    ProfilePaper,
    Avatar,
    UploadPhotoButton,
    AvatarBlock,
    ProfileField,
    FormBlock,
} from './units';

import { Button, Input } from '@components';
import { profileFormFields, getInitialProfileForm } from './fields';

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
                <AvatarBlock>
                    <ProfilePaper>
                        <Avatar />

                        <UploadPhotoButton>
                            + Загрузить новое фото
                        </UploadPhotoButton>
                    </ProfilePaper>

                    <Button style={{ marginTop: '30px' }}>
                        Сменить пароль
                    </Button>
                </AvatarBlock>

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
                </FormBlock>
            </ProfileContent>
        </ProfileContainer>
    );
});
