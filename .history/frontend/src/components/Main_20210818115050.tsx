import React from 'react';
import '../styles/main.scss'

type mainType = {
 titulo : string
}


const Main: React.FC<mainType> = ({...props}) => {
 
 return(
  <main>
       <h2>{props.titulo}</h2>
       <div> 
          {props.children}
       </div>
     
  </main>
 )
} ;

export  default Main;