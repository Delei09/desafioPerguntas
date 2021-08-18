import React from 'react'
import ContainerMain from '../components/ContainerMain'
import Header from '../components/Header'
import '../styles/resultado.scss'


const Resultado = () => {

 return(
  <>
     <Header titulo = 'Teste de Conhecimentos' />
     <h2>Parabens! Você tirou 82.</h2>
     <ContainerMain titulo = 'O teste vale 100 pontos, e a nota necessária é 70'>
          <div className= 'divResultadoGrafico'>
              sasasasasa
          </div>

          <a href = '/' className= 'linkResultado'>Ver gabarito</a>
     </ContainerMain>
     
 </>
 )
}

export default Resultado