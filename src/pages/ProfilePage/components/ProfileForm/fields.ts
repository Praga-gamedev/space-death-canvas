import { IProfileFields } from '../../types';

interface IProfileFormField {
    label: string;
    name: keyof IProfileFields;
    type: string;
}

export const coreFormFields: IProfileFormField[] = [
    { label: 'Имя', name: 'first_name', type: 'text' },
    { label: 'Фамилия', name: 'second_name', type: 'text' },
    { label: 'Никнейм', name: 'display_name', type: 'text' },
    { label: 'E-Mail', name: 'email', type: 'text' },
    { label: 'Телефон', name: 'phone', type: 'text' },
];

export const passwordFormFields: IProfileFormField[] = [
    { label: 'Старый пароль', name: 'oldPassword', type: 'password' },
    { label: 'Новый пароль', name: 'newPassword', type: 'password' },
];

export const getInitialProfileForm = (): IProfileFields =>
    [...coreFormFields, ...passwordFormFields].reduce(
        (acc: IProfileFields, { name }) => ({ ...acc, [name]: '' }),
        {} as IProfileFields
    );
