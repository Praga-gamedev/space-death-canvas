export type TState = Record<string, any>;

export interface IUserProps {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
}

export interface IInitOptions {
    silent?: boolean;
}
