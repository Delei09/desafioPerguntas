import React from 'react';

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