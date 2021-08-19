import React , {useContext , useState}from 'react';
import Header from '../components/Header'
import ContainerMain  from '../components/ContainerMain';
import ContextPerguntas from '../contexto/PerguntasContext';
import {Link, useHistory} from 'react-router-dom'
import '../styles/home.scss'

const Home = (props : any) => {

 
type respostaType = {
   p1 : string ,
   p2 : string ,
   p3 : string ,
   p4 : string ,
}

const inicialResposta= {
   p1 : '' ,
   p2 : '' ,
   p3 : '' ,
   p4 : '' ,
}
   const [respostaMatematica , setRespostaMatematica] =  useState<respostaType>(inicialResposta)
   const [respostaHistoria , setRespostaHistoria] =  useState<respostaType>(inicialResposta)
   const [respostaGeografia , setRespostaGeografia] =  useState<respostaType>(inicialResposta)
   const {perguntasMatematica, perguntasHistoria, perguntasGeografia}  = useContext(ContextPerguntas)
   const [erro, setErro] = useState<string>('')
   let history = useHistory()

   function estado(e : any){
      
      e.preventDefault()
      if(respostaGeografia.p1 === '' || respostaGeografia.p2 === '' || respostaGeografia.p3 === '' || respostaGeografia.p4 === '' ||
      respostaHistoria.p1 === '' || respostaHistoria.p2 === '' || respostaHistoria.p3 === '' || respostaHistoria.p4 === '' ||
      respostaMatematica.p1 === '' || respostaMatematica.p2 === '' || respostaMatematica.p3 === '' || respostaMatematica.p4 === ''){
         setErro('Preencha todas as respostas')
   
      }else{
         setErro('')
         props.setMat(respostaMatematica)
         props.setHis(respostaHistoria)
         props.setGeo(respostaGeografia)
         history.push('/resultado')

      }
         
   }
 return(
<>
   <Header titulo = 'Teste de Conhecimentos' />
  
   <ContainerMain titulo = 'Conhecimentos em Matemática'>
      {perguntasMatematica.map( (questao,i ) => {
      return(
         <div key={questao.id}>
         <h4>{questao.pergunta}</h4>
         <div className = 'mainOpcao'> 
         {questao.options.map( (option, i) => {
            return(
               <div className = 'divInputLabel'>
                    <input  type="checkbox" id = {questao.id} onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> {
                     setRespostaMatematica({...respostaMatematica , [questao.id] : option  } )               } }
                  name={`mat${questao.id}`} value= {option} />   
                    <label key = {i}  htmlFor= {`mat${questao.id}`}>  {option}  </label>
                
                </div>
            )
         })}
         </div>
         {i < 3 ? <hr/> : ''} 
         </div>
      )   
      })}
   </ContainerMain>
   <div className="exemplo-radio">    <input type="radio" value="0" name="campo-radio" id="campo-radio1" />    <label for="campo-radio1">Opção</label>    <input type="radio" value="0" name="campo-radio" id="campo-radio2" />    <label for="campo-radio2">Opção</label></div><div className="exemplo-checkbox">    <input type="checkbox" value="0" name="campo-checkbox" id="campo-checkbox1" />    <label for="campo-checkbox1">Opção</label>    <input type="checkbox" value="0" name="campo-checkbox" id="campo-checkbox" />    <label for="campo-checkbox">Opção</label></div>
   <ContainerMain titulo = 'Conhecimentos em Historia'>

{perguntasHistoria.map((questao, i) => {
      return(
         <div key={questao.id}>
         <h4>{questao.pergunta}</h4>
         <div className = 'mainOpcao'> 
         {questao.options.map( (option, i) => {
            return(
               <label key = {i}>  <input name={`his${questao.id}`} type="radio" id = {questao.id} onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> {
                  setRespostaHistoria({...respostaHistoria , [questao.id] : option  } )               } } 
               /> {option}  </label>
            )
         })}
         </div>
         {i < 3 ? <hr/> : ''} 
         </div>
      )   
      })}
   </ContainerMain>
   <ContainerMain titulo = 'Conhecimentos em Geografia'>

{perguntasGeografia.map((questao, i) => {
      return(
         <div key={questao.id}>
         <h4>{questao.pergunta}</h4>
         <div className = 'mainOpcao'> 
         {questao.options.map( (option, i) => {
            return(
               <>
               <label key = {i}>  <input name={`geo${questao.id}`}type="radio" id = {questao.id} onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> {
                  setRespostaGeografia({...respostaGeografia , [questao.id] : option  } )               } } 
               /> {option}  </label></>
            )
         })}
         </div>
         {i < 3 ? <hr/> : ''} 
         </div>
      )   
      })}
   </ContainerMain>
   <h4 className = 'erro'>{erro}</h4>
   <div className = 'divButton'>
      <Link to = '/' >Cancelar</Link>
      <button onClick = {e => estado(e)}>Enviar</button>
   </div>
   </>
 )
}

export default Home