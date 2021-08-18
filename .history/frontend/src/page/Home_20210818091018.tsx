import React from 'react';
import Header from '../components/Header'
import Main  from '../components/Main';


const Home : React.FC= () => {

 return(
<>
   <Header titulo = 'Gabarito: Teste de Conhecimentos' />
   <Main title = 'teste'>
         <h2>Conhecimentos em Matemática</h2>
         <h4>01; quanto é 2 + 2?</h4>
         <input TYPE="checkbox" NAME="OPCAO" VALUE="op1" /> opção1
         <input TYPE="checkbox" NAME="OPCAO" VALUE="op2" /> opção2
         <input TYPE="checkbox" NAME="OPCAO" VALUE="op3" /> opção3
   </Main>
</>
 )
}

export default Home