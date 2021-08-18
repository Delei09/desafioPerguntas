import React from 'react'
import ContainerMain from '../components/ContainerMain'
import Header from '../components/Header'
import '../styles/resultado.scss'


const Resultado = () => {

 return(
  <>
     <Header titulo = 'Teste de Conhecimentos' />
     <ContainerMain titulo = 'Parabéns voce tirou'>
           <h6>O teste vale 100 pontos, e a nota necessária é 70</h6>
          <div className= 'divResultadoGrafico'>
              sasasasasa
          </div>

          <a href = '/'>Ver gabarito</a>
     </ContainerMain>
     
 </>
 )
}

export default Resultado