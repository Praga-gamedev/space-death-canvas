import { ButtonHTMLAttributes } from 'react';

export interface IForumButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    isClicked: boolean;
}
