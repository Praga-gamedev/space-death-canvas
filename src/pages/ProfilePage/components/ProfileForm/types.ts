import { IProfileFields } from '@pages/ProfilePage/types';

export interface IProfileFormProps {
    fields: IProfileFields;
    passwordMode: boolean;
    onChange: (fields: IProfileFields) => void;
    setPasswordMode: (mode: boolean) => void;
    onSubmit: (data: Partial<IProfileFields>) => void;
}
