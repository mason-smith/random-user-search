import React, { FC, memo, ChangeEvent } from 'react';

// Local Dependencies
import styles from 'styles/components/Input.module.css';
import { InputProps } from './types';

const Input: FC<InputProps> = (props) => {
  const {
    onChange,
    onKeyDown,
    value,
    overrideClasses,
    placeholder,
    list,
    name,
    id,
  } = props;
  return (
    <input
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
      onKeyDown={(e) => onKeyDown(e)}
      className={`${overrideClasses} ${styles.input}`}
      type="text"
      placeholder={placeholder || ''}
      list={list || undefined}
      name={name || undefined}
      id={id || undefined}
    />
  );
};

export default memo(Input);
