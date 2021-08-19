import React from 'react'
import ContainerMain from '../components/ContainerMain'
import Header from '../components/Header'
import '../styles/resultado.scss'
import  ContextResposta  from '../contexto/RespostaContext'
import { useContext } from 'react'


const Resultado = () => {

const { respGeo, respHis, respMat} = useContext(ContextResposta)
console.log(respGeo, respHis, respMat)
 return(
  <div className = 'divResultado'>
     <Header titulo = 'Teste de Conhecimentos' />
     <h2 className = 'h2Resultado'>Parabens! Você tirou 82.</h2>
     <ContainerMain titulo = 'O teste vale 100 pontos, e a nota necessária é 70'>
          <div className= 'divResultadoGrafico'>
              <div>
                  <span>ss</span>
                  <span></span>

              </div>
          </div>

          <a href = '/gabarito' className= 'linkResultado'>Ver gabarito</a>
     </ContainerMain>
     
 </div>
 )
}

export default Resultado