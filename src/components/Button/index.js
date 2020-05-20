import React from 'react';
import './styles.css';

export default function Button({type, title}){
  return (
    <button type={type} className="button btnform">
      <span>
        {title}
      </span>
    </button>
  )
}