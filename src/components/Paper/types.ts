import { ButtonHTMLAttributes } from 'react';

export interface IPaperProps extends ButtonHTMLAttributes<HTMLDivElement> {
    w?: string;
    h?: string;
    minw?: string;
    maxw?: string;
    isRounding?: boolean;
}
