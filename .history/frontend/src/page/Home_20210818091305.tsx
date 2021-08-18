import React from 'react';
import Header from '../components/Header'
import Main  from '../components/Main';


const Home : React.FC= () => {

 return(
<>
   <Header titulo = 'Gabarito: Teste de Conhecimentos' />
   <Main titulo = 'Conhecimentos em Matemática'>
      <div> 
         <h4>01; quanto é 2 + 2?</h4>
         <input type="checkbox" name="OPCAO" value="op1" /> opção1
         <input type="checkbox" name="OPCAO" value="op2" /> opção2
         <input type="checkbox" name="OPCAO" value="op3" /> opção3
      </div>
         
   </Main>
</>
 )
}

export default Home