import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children, ...rest }) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
