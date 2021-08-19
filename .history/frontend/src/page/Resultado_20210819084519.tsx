import React from 'react'
import ContainerMain from '../components/ContainerMain'
import Header from '../components/Header'
import '../styles/resultado.scss'
import  ContextResposta  from '../contexto/RespostaContext'
import { useContext } from 'react'
import ContextPerguntas from '../contexto/PerguntasContext'


const Resultado = () => {

const { respGeo, respHis, respMat} = useContext(ContextResposta)
const { perguntasGeografia, perguntasHistoria, } = useContext(ContextPerguntas)
console.log(respGeo, respHis, respMat)

const respGraficoMat = {
    width: '60px',
    'background-color': '#9EBAEF' ,
    ',
    height: '308px'
}
 return(
  <div className = 'divResultado'>
     <Header titulo = 'Teste de Conhecimentos' />
     <h2 className = 'h2Resultado'>Parabens! Você tirou 82.</h2>
     <ContainerMain titulo = 'O teste vale 100 pontos, e a nota necessária é 70'>
          <div className= 'divResultadoGrafico'>
              
                 <div> <div className = 'graficoMat'></div>  4 </div>
                 <div> <div style = {respGraficoMat}  ></div>  4 </div>

                 <div> <div className = 'graficoHis'></div>  4 </div>
                 <div> <div style = {respGraficoMat}  ></div>  4 </div>

                 <div> <div className = 'graficoGeo'></div>  4 </div>
                 <div> <div style = {respGraficoMat}  ></div>  4 </div>

            
          </div>

          <a href = '/gabarito' className= 'linkResultado'>Ver gabarito</a>
     </ContainerMain>
     
 </div>
 )
}

export default Resultado