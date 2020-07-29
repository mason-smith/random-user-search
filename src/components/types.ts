import { ChangeEvent, ReactNode } from 'react';

/**
 * Input
 */
export interface InputProps {
  overrideClasses?: any;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: any) => void;
  list?: string | undefined;
  name?: string | undefined;
  id?: string | undefined;
}

/**
 * Button
 */
export interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
}
