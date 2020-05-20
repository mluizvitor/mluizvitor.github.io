import React from 'react';
import './styles.css';

export function Card({imageSrc, title, description}){
  return(
    <div className="card">
      <div className="cardImg" style={{backgroundImage: `url(${imageSrc})`}}/>
      <div className="cardBody">
        <h4>{title}</h4>
        <p className="subtitle">{description}</p>
      </div>
    </div>
  )
}

export function CardBox({children}) {
  return (
    <div className="cardBox">
      {children}
    </div>
  )
}