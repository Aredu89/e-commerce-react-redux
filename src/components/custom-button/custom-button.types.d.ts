import { ButtonHTMLAttributes } from 'react';
import { BUTTON_TYPE_CLASSES } from './custom-button.component';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
};
