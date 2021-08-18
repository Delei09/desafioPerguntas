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
         <h2>{questao.pergunta}</h2>
      )   
      })}


         <h4>   </h4>
         <div className = 'mainOpcao'> 
          <label>  <input type="radio" name="OPCAO" value="op1" /> opção1  </label>
          <label>  <input type="radio" name="OPCAO" value="op1" /> opção1  </label>
          <label>  <input type="radio" name="OPCAO" value="op1" /> opção1  </label>
         </div>
         <hr/>
         
         <h4>01; quanto é 2 + 2?</h4>
         <div className = 'mainOpcao'> 
          <label>  <input type="radio" name="OPCAO" value="op1" /> opção1  </label>
          <label>  <input type="radio" name="OPCAO" value="op1" /> opção1  </label>
          <label>  <input type="radio" name="OPCAO" value="op1" /> opção1  </label>
         </div>
         <hr/>

         <h4>01; quanto é 2 + 2?</h4>
         <div className = 'mainOpcao'> 
          <label>  <input type="radio" name="OPCAO" value="op1" /> opção1  </label>
          <label>  <input type="radio" name="OPCAO" value="op1" /> opção1  </label>
          <label>  <input type="radio" name="OPCAO" value="op1" /> opção1  </label>
         </div>
         <hr/>
   </Main>
</>
 )
}

export default Home