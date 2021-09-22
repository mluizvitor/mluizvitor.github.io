import React from 'react';
import { CTypoH1, CTypoH2, CTypoH3, CTypoH4, CTypoP } from './styles';

export function TypoH1({ children, gridColumn, order, ...rest }) {
  return (
    <CTypoH1 gridColumn={gridColumn} order={order} {...rest}>
      {children}
    </CTypoH1>
  );
}

export function TypoH2({ titleBg, children, gridColumn, order, ...rest }) {
  return (
    <CTypoH2 gridColumn={gridColumn} titleBg={titleBg} order={order} {...rest}>
      {children}
    </CTypoH2>
  );
}

export function TypoH3({ titleBg, children, gridColumn, order, ...rest }) {
  return (
    <CTypoH3 gridColumn={gridColumn} titleBg={titleBg} order={order} {...rest}>
      {children}
    </CTypoH3>
  );
}

export function TypoH4({ titleBg, children, gridColumn, order, ...rest }) {
  return (
    <CTypoH4 gridColumn={gridColumn} titleBg={titleBg} order={order} {...rest}>
      {children}
    </CTypoH4>
  );
}

export function TypoP({ titleBg, children, gridColumn, order, ...rest }) {
  return (
    <CTypoP gridColumn={gridColumn} titleBg={titleBg} order={order} {...rest}>
      {children}
    </CTypoP>
  );
}
