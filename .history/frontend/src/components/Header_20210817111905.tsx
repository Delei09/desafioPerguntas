import React from 'react';
import '../styles/header.scss'


type headerType = {
 titulo: string;
}


const Header = (props : headerType) => {
 
 return(
  <header>
   {props.titulo}
  </header>
 )
} ;

export default Header