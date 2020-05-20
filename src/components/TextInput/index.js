import React from 'react';
import './styles.css';

export function TextInput({id, label, placeholder, required}){
  return (
    <div className="textInput">
      <label className="section" htmlFor={id}>{label}</label>
      <input id={id} name={id} placeholder={placeholder} required={required ? true : false}/>
    </div>
  )
}

export function TextAreaInput({id, label, placeholder, required}){
  return (
    <div className="textInput">
      <label className="section" htmlFor={id}>{label}</label>
      <textarea id={id} name={id} placeholder={placeholder} required={required ? true : false}/>
    </div>
  )
}

export function Form({method, action, onSubmit, children}){
  return (
    <form className="formStyle" onSubmit={onSubmit} method={method} action={action}>
      {children}
    </form>
  )
}