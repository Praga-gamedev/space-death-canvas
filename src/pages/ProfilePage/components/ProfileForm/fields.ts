import { IProfileFields } from '../../types';

interface IProfileFormField {
    label: string;
    name: keyof IProfileFields;
}

export const coreFormFields: IProfileFormField[] = [
    { label: 'Имя', name: 'first_name' },
    { label: 'Фамилия', name: 'second_name' },
    { label: 'Никнейм', name: 'display_name' },
    { label: 'E-Mail', name: 'email' },
    { label: 'Телефон', name: 'phone' },
];

export const passwordFormFields: IProfileFormField[] = [
    { label: 'Старый пароль', name: 'oldPassword' },
    { label: 'Новый пароль', name: 'newPassword' },
];

export const getInitialProfileForm = (): IProfileFields =>
    [...coreFormFields, ...passwordFormFields].reduce(
        (acc: IProfileFields, { name }) => ({ ...acc, [name]: '' }),
        {} as IProfileFields
    );
