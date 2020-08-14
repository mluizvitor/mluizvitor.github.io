import React from 'react';
import './styles.css';
import { Container } from './styles';

export function TextInput({ id, label, placeholder, type, required }) {
  return (
    <Container>
      <label className="section" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required ? true : false}
      />
    </Container>
  );
}

export function TextAreaInput({ id, label, placeholder, required }) {
  return (
    <Container>
      <label className="section" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        required={required ? true : false}
      />
    </Container>
  );
}

export function Form({ method, action, onSubmit, children }) {
  return (
    <form
      className="formStyle"
      onSubmit={onSubmit}
      method={method}
      action={action}
    >
      {children}
    </form>
  );
}
