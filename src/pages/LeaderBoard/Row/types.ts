import { HTMLAttributes } from 'react';

export interface IRowProps extends HTMLAttributes<HTMLDivElement> {
    userName: string;
    score: string | number;
    isEven?: boolean;
}
