import React, { useState } from 'react'
import ContainerMain from '../components/ContainerMain'
import Header from '../components/Header'
import '../styles/resultado.scss'
import  ContextResposta  from '../contexto/RespostaContext'
import { useContext } from 'react'
import ContextPerguntas from '../contexto/PerguntasContext'
import { useEffect } from 'react'


const Resultado = () => {


const [resultadoMatematica, setResultadoMatematica] = useState<string[]>([])
const [resultadoHistoria, setResultadoHistoria] = useState<string[]>([])
const [resultadoGeografia, setResultadoGeografia] = useState<string[]>([])
const { respGeo, respHis, respMat} = useContext(ContextResposta)
const { perguntasGeografia, perguntasHistoria,perguntasMatematica } = useContext(ContextPerguntas)
const w = 1;
const respGraficoMat = {
    width: '60px',
    'background-color': '#9EBAEF' ,
    height: `${resultadoMatematica.length * 77}px`
}
const respGraficoHis = {
    width: '60px',
    'background-color': '#9EBAEF' ,
    height: `${resultadoHistoria.length * 77}px`
}
const respGraficoGeo = {
    width: '60px',
    'background-color': '#9EBAEF' ,
    height: `${resultadoGeografia.length * 77}px`
}


        useEffect( () => {
            
         const respostaOkGeo =    perguntasGeografia.map( ({resposta}) =>   resposta )
         const respostaOkHis =    perguntasHistoria.map( ({resposta}) =>   resposta )
         const respostaOkMat =    perguntasMatematica.map( ({resposta}) =>   resposta )
         const resultadoGeoCerto = [];
         const resultadoMatCerto = [];
         const resultadoHisCerto = [];
        
         for(let res of respostaOkGeo){
            if(res === respGeo.p1){
                    resultadoGeoCerto.push(res)
                }else  if(res === respGeo.p2){
                        resultadoGeoCerto.push(res)
                    }else  if(res === respGeo.p3){
                        resultadoGeoCerto.push(res)
                        }else  if(res === respGeo.p4){
                            resultadoGeoCerto.push(res)
                            }
            }

        for(let res of respostaOkMat){
            if(res === respMat.p1){
                    resultadoMatCerto.push(res)
                }else if(res === respMat.p2){
                        resultadoMatCerto.push(res)
                }else if(res === respMat.p3){
                    resultadoMatCerto.push(res)
                    }else if(res === respMat.p4){
                        resultadoMatCerto.push(res)
                        }
        }
        for(let res of respostaOkHis){
            if(res === respHis.p1){
                    resultadoHisCerto.push(res)
                }else if(res === respHis.p2){
                        resultadoHisCerto.push(res)
                    }else if(res === respHis.p3){
                        resultadoHisCerto.push(res)
                        }else if(res === respHis.p4){
                             resultadoHisCerto.push(res)
                            }
        }
        setResultadoGeografia(resultadoGeoCerto)
        setResultadoHistoria(resultadoHisCerto)
        setResultadoMatematica(resultadoMatCerto)
    }, [])

const nota =  (resultadoGeografia.length + resultadoHistoria.length + resultadoMatematica.length ) * 8.34
       
 return(
  <div className = 'divResultado'>
     <Header titulo = 'Teste de Conhecimentos' />
     <h2 className = 'h2Resultado'>Parabens! Você tirou { nota}   ).toFixed(2) }.</h2>
     <ContainerMain titulo = 'O teste vale 100 pontos, e a nota necessária é 70'>
          <div className= 'divResultadoGrafico'>

              <div>
                    <div className = 'divCont'> <div className = 'graficoMat'></div>  4 </div>
                    <div className = 'divCont'>  <div style = {respGraficoMat}  ></div>  4 </div>
              </div>
             <div>
                  <div className = 'divCont'>  <div className = 'graficoHis'></div>  4 </div>
                 <div className = 'divCont'>  <div style = {respGraficoHis}  ></div>  4 </div>
             </div>
            <div>
                <div className = 'divCont'>  <div className = 'graficoGeo'></div>  4 </div>
                <div className = 'divCont'> <div style = {respGraficoGeo}  ></div>  4 </div>
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