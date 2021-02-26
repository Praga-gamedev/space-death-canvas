export interface IProfileUpdateData {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
}

export interface IPasswordUpdateData {
    oldPassword: string;
    newPassword: string;
}
