import { ButtonHTMLAttributes } from 'react';

export interface IHeaderProps {
    tabs: ITab[];
}

export interface ITab {
    path: string;
    title: string;
}

export interface ITabProps {
    isActive: string;
}

export interface IFullScreenBtnProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    isFullScreen: boolean;
}
