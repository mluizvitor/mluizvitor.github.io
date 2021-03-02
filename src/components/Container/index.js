import React from 'react';
import './styles.css'

export function Container({type, id, children}) {
  return (
    <div id={id} className={`container ${type}`}>
      {children}
    </div>
  )
}

export function Banner({id, backgroundImage, children}){
  return(
    <div id={id} className="banner" style={{backgroundImage: `url(${backgroundImage})`}}>
      {children}
    </div>
  )
}

export function ContainerEnhanced({id, bgImage, bgColor, children}){
  return (
    <div id={id} className="contEnhanced" style={{backgroundImage: `url(${bgImage})`, backgroundColor: bgColor}}>
      <div className="container">
        {children}
      </div>
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