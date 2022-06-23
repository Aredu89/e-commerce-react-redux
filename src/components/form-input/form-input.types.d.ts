import { InputHTMLAttributes } from 'react';

export type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};