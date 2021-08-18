import React ,{useContext}from 'react';
import '../styles/main.scss'
import { ContextPerguntas } from '../App'

type mainType = {
 titulo : string
}


const Main: React.FC<mainType> = ({...props}) => {
 
 const Contexto = useContext(ContextPerguntas)
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