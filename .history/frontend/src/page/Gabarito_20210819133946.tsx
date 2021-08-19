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
   const [resultadoMatematica, setResultadoMatematica] = useState<string[]>([])
   const [resultadoHistoria, setResultadoHistoria] = useState<string[]>([])
   const [resultadoGeografia, setResultadoGeografia] = useState<string[]>([])
   const { respGeo, respHis, respMat} = useContext(ContextResposta)


   useEffect( () => {
            
      const respostaOkGeo =    perguntasGeografia.map( ({resposta}) =>   resposta )
      const respostaOkHis =    perguntasHistoria.map( ({resposta}) =>   resposta )
      const respostaOkMat =    perguntasMatematica.map( ({resposta}) =>   resposta )
      const resultadoGeoCerto = [];
      const resultadoMatCerto = [];
      const resultadoHisCerto = [];
     
      for(let res of respostaOkGeo){
         if(res === respGeo.p1){
                 resultadoGeoCerto.push(res)
             }else  if(res === respGeo.p2){
                     resultadoGeoCerto.push(res)
                 }else  if(res === respGeo.p3){
                     resultadoGeoCerto.push(res)
                     }else  if(res === respGeo.p4){
                         resultadoGeoCerto.push(res)
                         }
         }

     for(let res of respostaOkMat){
         if(res === respMat.p1){
                 resultadoMatCerto.push(res)
             }else if(res === respMat.p2){
                     resultadoMatCerto.push(res)
             }else if(res === respMat.p3){
                 resultadoMatCerto.push(res)
                 }else if(res === respMat.p4){
                     resultadoMatCerto.push(res)
                     }
     }
     for(let res of respostaOkHis){
         if(res === respHis.p1){
                 resultadoHisCerto.push(res)
             }else if(res === respHis.p2){
                     resultadoHisCerto.push(res)
                 }else if(res === respHis.p3){
                     resultadoHisCerto.push(res)
                     }else if(res === respHis.p4){
                          resultadoHisCerto.push(res)
                         }
     }
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
               <label key = {i}>  <input  type="radio" id = {questao.id}  checked = {option === questao.resposta} 
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