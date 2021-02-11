import { IProfileForm } from './types';

interface IProfileFormField {
    label: string;
    name: keyof IProfileForm;
}

export const profileFormFields: IProfileFormField[] = [
    { label: 'Имя', name: 'first_name' },
    { label: 'Фамилия', name: 'second_name' },
    { label: 'Никнейм', name: 'display_name' },
    { label: 'E-Mail', name: 'email' },
    { label: 'Телефон', name: 'phone' },
];

export const getInitialProfileForm = (): IProfileForm =>
    profileFormFields.reduce(
        (acc: IProfileForm, { name }) => ({ ...acc, [name]: '' }),
        {} as IProfileForm
    );
