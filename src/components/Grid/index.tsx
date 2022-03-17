import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface GridProps {
  className: string;
  children: ReactNode;
}

export function Grid({ className, children, ...rest }: GridProps) {
  const classConcat = styles.gridContainer + " " + className;

  return (
    <div className={classConcat} {...rest}>
      {children}
    </div>
  );
}
