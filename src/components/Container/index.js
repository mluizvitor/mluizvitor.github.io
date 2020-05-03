import React from 'react';
import './styles.css'

export default function Container({type, backgroundImage, children}) {
  return (
    <div className={type ? type : 'container'} style={{backgroundImage: `url(${backgroundImage})`}}>
      {children}
    </div>
  )
}
