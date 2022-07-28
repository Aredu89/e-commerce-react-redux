import { ButtonHTMLAttributes } from 'react';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
};
