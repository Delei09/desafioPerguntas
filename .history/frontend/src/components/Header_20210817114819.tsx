import React from 'react';
import '../styles/header.scss'


type headerType = {
 titulo: string;
}


const Header = (props : headerType) => {
 
 return(
  <header className="headerApp">
   {props.titulo}
   <hr className="headerLinha"/>
  </header>
 )
} ;

export default Header