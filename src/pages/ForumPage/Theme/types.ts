import { HtmlHTMLAttributes } from 'react';

export interface IThemeProps extends HtmlHTMLAttributes<HTMLDivElement> {
    userName: string;
    content: string;
    isEven: boolean;
}
