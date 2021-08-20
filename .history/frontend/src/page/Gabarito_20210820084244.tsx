import React , {useContext, useState, useEffect }from 'react';
import Header from '../components/Header'
import ContainerMain  from '../components/ContainerMain';
import ContextPerguntas from '../contexto/PerguntasContext';
import ContextResposta  from '../contexto/RespostaContext';
import vetor from '../img/Vector.png'

import '../styles/home.scss'
import '../styles/gabarito.scss'
import { Link } from 'react-router-dom';

const Gabarito = (props : any) => {

   
   const {perguntasMatematica, perguntasHistoria, perguntasGeografia}  = useContext(ContextPerguntas)
  
   const { respGeo, respHis, respMat} = useContext(ContextResposta)


   useEffect( () => {
            
     console.log(respGeo)
 }, [])


 
 return(
<>
   <Header titulo = 'Gabarito: Teste de Conhecimentos' />
  
   <ContainerMain titulo = 'Conhecimentos em Matemática'>
      {perguntasMatematica.map( (questao,i ) => {
      return(
         <div key={questao.id}>
         <h4>{questao.pergunta}</h4>
         <div className = 'mainOpcao'> 
         {questao.options.map( (option, i) => {
            return(
               <div className = 'divInputLabel' key = {option } >
               <input className = 'radioErrado'  type="radio" id = {questao.id+option} defaultChecked = {option === questao.resposta}
             name={''} value= {option} />   
               <label key = {i}  htmlFor= {questao.id+option}>  {option}  </label>
              
               </div>
            )
         })}
         </div>
         {i < 3 ? <hr/> : ''} 
         </div>
      )   
      })}
   </ContainerMain>
   <ContainerMain titulo = 'Conhecimentos em Historia'>

{perguntasHistoria.map((questao, i) => {
      return(
         <div key={questao.id}>
         <h4>{questao.pergunta}</h4>
         <div className = 'mainOpcao'> 
         {questao.options.map( (option, i) => {
            return(
               <div className = 'divInputLabel' key = {option } >
               <input  type="radio" id = {questao.id+option}  defaultChecked = {option === questao.resposta}
             name={`his${questao.id}`} value= {option} />   
               <label key = {i}  htmlFor= {questao.id+option}>  {option}  </label>
              
               </div>
            )
         })}
         </div>
         {i < 3 ? <hr/> : ''} 
         </div>
      )   
      })}
   </ContainerMain>
   <ContainerMain titulo = 'Conhecimentos em Geografia'>

{perguntasGeografia.map((questao, i) => {
      return(
         <div key={questao.id}>
         <h4>{questao.pergunta}</h4>
         <div className = 'mainOpcao'> 
         {questao.options.map( (option, i) => {
            return(
               <div className = 'divInputLabel' key = {option }  >
              
               
               </div>            )
         })}
         </div>
         {i < 3 ? <hr/> : ''} 
         </div>
      )   
      })}
      <div className = 'divVetor'>
        <img src = {vetor} alt = 'Voltar' />
        <Link to = '/resultado' >Voltar</Link>
      </div>
   </ContainerMain>
  
   </>
 )
}

export default Gabarito