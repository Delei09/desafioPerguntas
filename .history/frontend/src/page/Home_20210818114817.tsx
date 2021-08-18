import React , {useContext}from 'react';
import Header from '../components/Header'
import Main  from '../components/Main';
import {ContextPerguntas} from '../App'

const Home : React.FC= () => {

   type perguntasT = {
      pergunta : string,
      options : [string] ,
      resposta : string ,
      id : string,
    }

const contextPerguntas = useContext(ContextPerguntas)

 return(
<>
   <Header titulo = 'Gabarito: Teste de Conhecimentos' />
   <Main titulo = 'Conhecimentos em Matemática'>

      {contextPerguntas.map(questao => {
      return(
         <div key={questao.id}>
         <h4>{questao.pergunta}</h4>
         <div className = 'mainOpcao'> 
         {questao.options.map(option => {
            return(
               <label>  <input type="radio" name={questao.id} value= {option} /> {option}  </label>
            )
         })}
         </div>
         <hr/>
         </div>
      )   
      })}
   </Main>
</>
 )
}

export default Home