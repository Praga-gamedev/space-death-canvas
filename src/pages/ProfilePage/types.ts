export interface IProfileForm {
    first_name: string;
    second_name: string;
    display_name: string;
    email: string;
    phone: string;
}

export interface IStat {
    name: string;
    label: string;
    value: number | string;
    icon: string;
    color: string;
}
