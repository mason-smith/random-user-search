import React, { FC, memo } from 'react';

// Local Dependencies
import styles from 'styles/components/Input.module.css';
import { InputProps } from './types';

const Input: FC<InputProps> = (props) => {
  const { handleChange, value, overrideClasses, placeholder } = props;
  return (
    <input
      name={value}
      onChange={(e) => handleChange(e)}
      className={`${overrideClasses} ${styles.input}`}
      type="text"
      placeholder={placeholder || ''}
    />
  );
};

export default memo(Input);
