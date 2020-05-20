import React from 'react';
import './styles.css';

export default function Button({type, onClick, title}){
  return (
    <button type={type} onClick={onClick} className="button btnform">
      <span>
        {title}
      </span>
    </button>
  )
}