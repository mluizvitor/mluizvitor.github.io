import React from 'react';
import "./style.css"


export default function Navbar({children}){
  return (
    <nav>
      {children}
    </nav>
  )
}