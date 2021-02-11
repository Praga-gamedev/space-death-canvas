import React, { FC, memo, ChangeEvent } from 'react';

import { FormBlock, ProfileField } from './units';
import { Input, Button } from '@components';

import { coreFormFields, passwordFormFields } from './fields';
import { IProfileFields } from '../../types';

interface IProfileFormProps {
    fields: IProfileFields;
    passwordMode: boolean;
    onChange: (fields: IProfileFields) => void;
    setPasswordMode: (mode: boolean) => void;
}

export const ProfileForm: FC<IProfileFormProps> = memo(
    ({ fields, passwordMode, onChange }) => {
        const fieldList = passwordMode ? passwordFormFields : coreFormFields;

        const profileFormHandler = (name: keyof IProfileFields) => (
            e: ChangeEvent<HTMLInputElement>
        ) => {
            const value = e.target.value;
            onChange({ ...fields, [name]: value });
        };

        return (
            <FormBlock>
                {fieldList.map(({ name, label }) => (
                    <ProfileField key={name}>
                        <Input
                            value={[fields[name]]}
                            label={label}
                            onChange={profileFormHandler(name)}
                        />
                    </ProfileField>
                ))}

                <Button style={{ marginTop: '60px' }}>Сохранить</Button>
            </FormBlock>
        );
    }
);
