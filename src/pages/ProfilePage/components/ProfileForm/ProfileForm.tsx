import React, { FC, memo, ChangeEvent } from 'react';

import {
    FormBlock,
    ProfileField,
    ProfileBackButton,
    ProfileButtons,
} from './units';
import { Input, Button } from '@components';

import { coreFormFields, passwordFormFields } from './fields';
import { IProfileFields } from '@pages/ProfilePage/types';

import backIcon from '@icons/back-icon.png';

interface IProfileFormProps {
    fields: IProfileFields;
    passwordMode: boolean;
    onChange: (fields: IProfileFields) => void;
    setPasswordMode: (mode: boolean) => void;
    onSubmit: (data: Partial<IProfileFields>) => void;
}

export const ProfileForm: FC<IProfileFormProps> = memo(
    ({ fields, passwordMode, onChange, setPasswordMode, onSubmit }) => {
        const fieldList = passwordMode ? passwordFormFields : coreFormFields;

        const profileFormHandler = (name: keyof IProfileFields) => (
            e: ChangeEvent<HTMLInputElement>
        ) => {
            const value = e.target.value;
            onChange({ ...fields, [name]: value });
        };

        const handleSubmit = () => {
            const data = fieldList.reduce((acc, { name }) => {
                const value = fields[name];
                return { ...acc, [name]: value };
            }, {});

            onSubmit(data);
        };

        return (
            <FormBlock>
                {fieldList.map(({ name, label, type }) => (
                    <ProfileField key={name}>
                        <Input
                            value={[fields[name]]}
                            label={label}
                            type={type}
                            onChange={profileFormHandler(name)}
                        />
                    </ProfileField>
                ))}

                <ProfileButtons withBackButton={passwordMode}>
                    {passwordMode && (
                        <ProfileBackButton
                            onClick={() => setPasswordMode(false)}
                        >
                            <img src={backIcon} />
                        </ProfileBackButton>
                    )}

                    <Button onClick={handleSubmit}>Сохранить</Button>
                </ProfileButtons>
            </FormBlock>
        );
    }
);
