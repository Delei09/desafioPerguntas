import React, { useState, useContext,useEffect} from 'react'
import {Link } from 'react-router-dom'
import ContainerMain from '../components/ContainerMain'
import Header from '../components/Header'
import  ContextResposta  from '../contexto/RespostaContext'
import ContextPerguntas from '../contexto/PerguntasContext'
import '../styles/resultado.scss'

const Resultado = () => {

const [resultadoMatematica, setResultadoMatematica] = useState<string[]>([])
const [resultadoHistoria, setResultadoHistoria] = useState<string[]>([])
const [resultadoGeografia, setResultadoGeografia] = useState<string[]>([])
const { respGeo, respHis, respMat} = useContext(ContextResposta)
const { perguntasGeografia, perguntasHistoria,perguntasMatematica } = useContext(ContextPerguntas)

const respGraficoMat = {
    'background': '#9EBAEF' ,
    height: `${resultadoMatematica.length * 77}px`
}
const respGraficoHis = {
    'background': '#9EBAEF' ,
    height: `${resultadoHistoria.length * 77}px`
}
const respGraficoGeo = {
    'background': '#9EBAEF' ,
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

const nota = ( (resultadoGeografia.length + resultadoHistoria.length + resultadoMatematica.length ) * 8.34 )
      
 return(
  <div className = 'divResultado'>
     <Header titulo = 'Teste de Conhecimentos' />
     <h2 className = 'h2Resultado'>    {nota >= 70 ?   'Parab??ns! Voc?? tirou ' : 'Infelizmente Voc?? tirou '}  <span className = {nota >= 70 ? 'notaVerde' : 'notaVermelho'}>{Math.round(nota)} .  </span>    </h2>
     <ContainerMain titulo = 'O teste vale 100 pontos, e a nota necess??ria ?? 70'>
          <div className= 'divResultadoGrafico'>

              <div>
                    <div className = 'divCont'> <div className = 'graficoMat'></div>  4 </div>
                    <div className = 'divCont'>  <div className= 'graficoMat' style = {respGraficoMat}  ></div>  {resultadoMatematica.length} </div>
              </div>
             <div>
                  <div className = 'divCont'>  <div className = 'graficoHis'></div>  4 </div>
                 <div className = 'divCont'>  <div className= 'graficoMat'  style = {respGraficoHis}  ></div>  {resultadoHistoria.length} </div>
             </div>
            <div>
                <div className = 'divCont'>  <div className = 'graficoGeo'></div>  4 </div>
                <div className = 'divCont'> <div style = {respGraficoGeo} className= 'graficoMat'   ></div>  {resultadoGeografia.length} </div>
            </div>
          </div>
          <div className = 'divTexto'>
              <h2>Matem??tica</h2>
              <h2>Hist??ria</h2>
              <h2>Geografia</h2>
          </div>

          <Link to = '/gabarito' className= 'linkResultado'>Ver gabarito</Link>
     </ContainerMain>
     
 </div>
 )
}

export default Resultado