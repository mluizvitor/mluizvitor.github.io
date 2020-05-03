import React from 'react';

export default function GalleryItem({title, imgSource}){
  return (
    <img src={imgSource} alt={title}/>
)
}