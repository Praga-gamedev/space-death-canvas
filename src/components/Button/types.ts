import { ButtonHTMLAttributes } from 'react';
import { ThemeType } from 'src/theme';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ThemeType;
