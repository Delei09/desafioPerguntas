import React from 'react'
import ContainerMain from '../components/ContainerMain'
import Header from '../components/Header'
import '../styles/resultado.scss'
import  ContextResposta  from '../contexto/RespostaContext'
import { useContext } from 'react'
import ContextPerguntas from '../contexto/PerguntasContext'
import { useEffect } from 'react'


const Resultado = () => {

const { respGeo, respHis, respMat} = useContext(ContextResposta)
const { perguntasGeografia, perguntasHistoria, } = useContext(ContextPerguntas)
const w = 1;

const respGraficoMat = {
    width: '60px',
    'background-color': '#9EBAEF' ,
    height: `${w * 77}px`
}
const respGraficoHis = {
    width: '60px',
    'background-color': '#9EBAEF' ,
    height: `${w * 77}px`
}
const respGraficoGeo = {
    width: '60px',
    'background-color': '#9EBAEF' ,
    height: `${w * 77}px`
}
        
        useEffect( () =>{
            
         const respostaOk =    perguntasGeografia.map( ({resposta}) =>   resposta )
         const result = respostaOk.filter(res => res === ( (respGeo.p3) || (respGeo.p4) )  )
            console.log(result)
            
        }  )



        console.log(respGeo.p2 + ' fora do efect')
 return(
  <div className = 'divResultado'>
     <Header titulo = 'Teste de Conhecimentos' />
     <h2 className = 'h2Resultado'>Parabens! Você tirou 82 {respGeo.p1}.</h2>
     <ContainerMain titulo = 'O teste vale 100 pontos, e a nota necessária é 70'>
          <div className= 'divResultadoGrafico'>
              <div>
                    <div className = 'divCont'> <div className = 'graficoMat'></div>  4 </div>
                    <div className = 'divCont'>  <div style = {respGraficoMat}  ></div>  4 </div>
              </div>
             <div>
                  <div className = 'divCont'>  <div className = 'graficoHis'></div>  4 </div>
                 <div className = 'divCont'>  <div style = {respGraficoMat}  ></div>  4 </div>
             </div>
            <div>
                <div className = 'divCont'>  <div className = 'graficoGeo'></div>  4 </div>
                <div className = 'divCont'> <div style = {respGraficoMat}  ></div>  4 </div>
            </div>
          </div>
          <div className = 'divTexto'>
              <h2>Matematica</h2>
              <h2>Historia</h2>
              <h2>Geografia</h2>
          </div>

          <a href = '/gabarito' className= 'linkResultado'>Ver gabarito</a>
     </ContainerMain>
     
 </div>
 )
}

export default Resultado