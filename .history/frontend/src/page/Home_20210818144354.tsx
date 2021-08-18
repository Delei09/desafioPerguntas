import React , {useContext}from 'react';
import Header from '../components/Header'
import ContainerMain  from '../components/ContainerMain';
import {ContextPerguntas} from '../App'

const Home : React.FC= () => {

const {perguntasMatematica, perguntasHistoria} = useContext(ContextPerguntas)

 return(
<>
   <Header titulo = 'Gabarito: Teste de Conhecimentos' />
   <ContainerMain titulo = 'Conhecimentos em Matemática'>

      {perguntasMatematica.map(questao => {
      return(
         <div key={questao.id}>
         <h4>{questao.pergunta}</h4>
         <div className = 'mainOpcao'> 
         {questao.options.map( (option, i) => {
            return(
               <label key = {i}>  <input type="radio" name={questao.id} value= {option} /> {option}  </label>
            )
         })}
         </div>
         <hr/>
         </div>
      )   
      })}
   </ContainerMain>
   <ContainerMain titulo = 'Conhecimentos em Historia'>

{perguntasHistoria.map(questao => {
      return(
         <div key={questao.id}>
         <h4>{questao.pergunta}</h4>
         <div className = 'mainOpcao'> 
         {questao.options.map( (option, i) => {
            return(
               <label key = {i}>  <input type="radio" name={questao.id} value= {option} /> {option}  </label>
            )
         })}
         </div>
         <hr/>
         </div>
      )   
      })}
   </ContainerMain>
</>
 )
}

export default Home