export interface IProfileFields {
    first_name: string;
    second_name: string;
    display_name: string;
    email: string;
    phone: string;
    oldPassword: string;
    newPassword: string;
}

export interface IStat {
    name: string;
    label: string;
    value: number | string;
    icon: string;
    color: string;
}
