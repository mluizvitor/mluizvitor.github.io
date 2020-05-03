import React from 'react';
import './styles.css'

export function Container({type, backgroundImage, id, children}) {
  return (
    <div id={id} className={type ? type : 'container'} style={{backgroundImage: `url(${backgroundImage})`}}>
      {children}
    </div>
  )
}

export function FooterContainer({id, children}) {
  return(
    <footer id={id} className={'container footer'}>
      {children}
    </footer>
  )
}