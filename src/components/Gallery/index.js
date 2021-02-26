import React from 'react';
import './styles.css'

export function Gallery({title, children}){
  return (
    <div className={'gallery'}>
      <h3 className={'section'}>{title}</h3>
      <div className={'galleryGrid'}>
        {children}
      </div>
    </div>
  )
}

export function GalleryItem({title, imgSource}){
  return (
    <figure>
      <img src={imgSource} alt={title}/>
      <figcaption>{title}</figcaption>
    </figure>
  )
}