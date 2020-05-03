import React from 'react';
import './styles.css'

export default function Gallery({title, children}){
  return (
    <div className={'gallery'}>
      <h3 className={'section'}>{title}</h3>
      <div className={'galleryGrid'}>
        {children}
      </div>
    </div>
  )
}