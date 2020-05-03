import React from 'react';
import './styles.css'

export function Container({type, backgroundImage, id, children}) {
  return (
    <div id={id} className={type ? type : 'container'} style={{backgroundImage: `url(${backgroundImage})`}}>
      {children}
    </div>
  )
}
