import React , {useContext, useState, useEffect }from 'react';
import Header from '../components/Header'
import ContainerMain  from '../components/ContainerMain';
import ContextPerguntas from '../contexto/PerguntasContext';
import ContextResposta  from '../contexto/RespostaContext';
import vetor from '../img/Vector.png'

import '../styles/home.scss'
import '../styles/gabarito.scss'

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
               <label key = {i}>  <input  type="radio" id = {questao.id}  defaultChecked = {option === questao.resposta} 
               name={`mat${questao.id}`} value= {option} /> {option}  </label>
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
               <label key = {i}>  <input name={`his${questao.id}`} type="radio" checked = {option === questao.resposta}  id = {questao.id} /> {option}  </label>
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
               <label key = {i}>  <input name={`geo${questao.id}`}type="radio" id = {questao.id} checked = {option === questao.resposta}   /> {option}  </label>
            )
         })}
         </div>
         {i < 3 ? <hr/> : ''} 
         </div>
      )   
      })}
      <div className = 'divVetor'>
        <img src = {vetor} alt = 'Voltar' />
        <a href = '/resultado' >Voltar</a>
      </div>
   </ContainerMain>
  
   </>
 )
}

export default Gabarito