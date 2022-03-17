import React, { ReactNode } from 'react';
import { FiArrowRight, FiTool, FiExternalLink } from 'react-icons/fi';
import { Grid } from '../Grid';
import styles from './styles.module.scss';

interface CardBoxProps {
  children: ReactNode;
}

interface CardProps {
  href: string;
  imageSrc?: string;
  title: string;
  description?: string;
  wip?: boolean;
}

export function Card({
  href,
  imageSrc,
  title,
  description,
  wip,
  ...rest
}: CardProps) {
  let cardContainer = styles.cardContainer;

  if (wip === true) {
    cardContainer += ' ' + styles.wip;
  }

  return (
    <a href={href} className={cardContainer} {...rest}>
      {imageSrc && <img src={imageSrc} title={title} />}

      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>

      <footer>
        {wip ? (
          <>
            <span>em construção</span>
            <FiTool size={16} />
          </>
        ) : (
          <>
            <span>ver mais</span>
            <FiArrowRight size={16} />
          </>
        )}
      </footer>
    </a>
  );
}

export function CardBox({ children, ...rest }: CardBoxProps) {
  return (
    <Grid className={styles.portfolioGrid} {...rest}>
      {children}
    </Grid>
  );
}
