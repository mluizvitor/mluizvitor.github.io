import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface ContainerProps {
  id?: string;
  bgColor?: string;
  bgImage?: string;
  type?: 'error' | 'portfolio' | 'banner';
  children: ReactNode;
}

export function Container({
  id,
  bgColor,
  bgImage,
  type,
  children,
  ...rest
}: ContainerProps) {
  let compClass = styles.sectionContainer;

  switch (type) {
    case 'banner':
      compClass = compClass.concat(' ' + styles.banner);
      break;

    case 'portfolio':
      // TO DO
      break;

    case 'error':
      compClass = compClass.concat(' ' + styles.error + ' ' + styles.banner);
      break;
  }

  return (
    <div
      id={id}
      className={compClass}
      style={{ backgroundImage: `url(${bgImage})`, backgroundColor: bgColor }}
    >
      <section {...rest}>{children}</section>
    </div>
  );
}
