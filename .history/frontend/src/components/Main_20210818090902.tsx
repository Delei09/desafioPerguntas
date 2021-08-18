import React from 'react';

type mainType = {
 title : string
}


const Main: React.FC<mainType> = ({...props}) => {
 
 return(
  <main>
   {props.children}
  </main>
 )
} ;

export  default Main;