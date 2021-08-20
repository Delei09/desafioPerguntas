import React , {useContext, useState, useEffect }from 'react';
import Header from '../components/Header'
import ContainerMain  from '../components/ContainerMain';
import ContextPerguntas from '../contexto/PerguntasContext';
import ContextResposta  from '../contexto/RespostaContext';
import vetor from '../img/Vector.png'

import '../styles/home.scss'
import '../styles/gabarito.scss'
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Gabarito = (props : any) => {

   
   const {perguntasMatematica, perguntasHistoria, perguntasGeografia}  = useContext(ContextPerguntas)
  
   const { respGeo, respHis, respMat} = useContext(ContextResposta)

   const labelErrado = useRef(null)


   useEffect( () => {

      const label = document.querySelectorAll('.label')
      console.log(label)
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
               <input  type="radio" id = {questao.id+option} disabled = {true}  defaultChecked = {    (option === questao.resposta) || (option === respMat.p1) || (option === respMat.p2) || (respMat.p3 === option) || (respMat.p4 === option)    } 
             name={``} value= {option} />   
               <label className = {option === questao.resposta ? 'label' : 'labelErrado'}  htmlFor= {questao.id+option}>  {option}  </label>
              
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
               <input  type="radio" id = {questao.id+option} defaultChecked = {    (option === questao.resposta) || (option === respHis.p1) || (option === respHis.p2) || (respHis.p3 === option) || (respHis.p4 === option)    } 
             name={``} value= {option} />    
               <label className = {option === questao.resposta ? 'label' : 'labelErrado'}  htmlFor= {questao.id+option}>  {option}  </label>
              
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
               <input  type="radio" id = {questao.id+option} defaultChecked = {    (option === questao.resposta) || (option === respGeo.p1) || (option === respGeo.p2) || (respGeo.p3 === option) || (respGeo.p4 === option)    } 
             name={``} value= {option} />   
               <label className = {option === questao.resposta ? 'label' : 'labelErrado'}  htmlFor= {questao.id+option}>  {option}  </label>
              
               </div>            )
         })}
         </div>
         {i < 3 ? <hr/> : ''} 
         </div>
      )   
      })}
      <div className = 'divVetor'>
      
        <Link to = '/resultado' >  <img src = {vetor} alt = 'Voltar' />  Voltar</Link>
      </div>
   </ContainerMain>
  
   </>
 )
}

export default Gabarito