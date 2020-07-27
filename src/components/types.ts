import { ChangeEvent, ReactNode } from 'react';

/**
 * Input
 */
export interface InputProps {
  overrideClasses?: any;
  placeholder?: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Button
 */
export interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
}
