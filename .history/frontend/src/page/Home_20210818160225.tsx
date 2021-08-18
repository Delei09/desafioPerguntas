import React , {useContext , useState}from 'react';
import Header from '../components/Header'
import ContainerMain  from '../components/ContainerMain';
import {ContextPerguntas} from '../App'
import '../styles/home.scss'

const Home : React.FC= () => {
type respostaType = {
   p1 : string ,
   p2 : string ,
   p3 : string ,
   p4 : string ,
}
const inicialResposta= {
   p1 : '' ,
   p2 : '' ,
   p3 : '' ,
   p4 : '' ,
}
   const [respostaMatematica , setRespostaMatematica] =  useState<respostaType>(inicialResposta)
   const [respostaHistoria , setRespostaHistoria] =  useState<respostaType>(inicialResposta)
   const [respostaGeografia , setRespostaGeografia] =  useState<respostaType>(inicialResposta)
   const {perguntasMatematica, perguntasHistoria, perguntasGeografia} = useContext(ContextPerguntas)

   function estado(){
      console.log(respostaMatematica, respostaGeografia, respostaHistoria)
   }
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
               <label key = {i}>  <input  type="radio" id = {questao.id} onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> {
                  setRespostaMatematica({...respostaMatematica , [questao.id] : option  } )               } }
               name={questao.id} value= {option} /> {option}  </label>
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
               <label key = {i}>  <input  type="radio" id = {questao.id} onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> {
                  setRespostaHistoria({...respostaHistoria , [questao.id] : option  } )               } } 
               /> {option}  </label>
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
               <label key = {i}>  <input  type="radio" id = {questao.id} onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> {
                  setRespostaGeografia({...respostaGeografia , [questao.id] : option  } )               } } 
               /> {option}  </label>
            )
         })}
         </div>
         {i < 3 ? <hr/> : ''} 
         </div>
      )   
      })}
   </ContainerMain>
   <div className = 'divButton'>
      <a href = '#' >Cancelar</a>
      <button onClick = {estado}>Enviar</button>
   </div>
   </>
 )
}

export default Home