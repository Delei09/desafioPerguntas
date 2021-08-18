import React from 'react';

type mainType = {
 titulo : string
}


const Main: React.FC<mainType> = ({...props}) => {
 
 return(
  <main>
       <h2>{props.titulo}</h2>
   {props.children}
  </main>
 )
} ;

export  default Main;