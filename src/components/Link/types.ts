import { ButtonHTMLAttributes } from 'react';

export interface ILinkProps extends ButtonHTMLAttributes<HTMLLinkElement> {
    path: string;
}
