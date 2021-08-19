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

   function limpar(){
      document.location.reload(true);
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
               <div className = 'divInputLabel' key = {option}>
                    <input  type="radio" id = {questao.id+option} onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> {
                     setRespostaMatematica({...respostaMatematica , [questao.id] : option  } )               } }
                  name={`mat${questao.id}`} value= {option} />   
                    <label key = {i}  htmlFor= {questao.id+option}>  {option}  </label>
                   
                </div>
            )
         })}
         </div>
         {i < 3 ? <hr/> : ''} 
         </div>
      )   
      })}
   </ContainerMain>
   <ContainerMain titulo = 'Conhecimentos em História'>

{perguntasHistoria.map((questao, i) => {
      return(
         <div key={questao.id}>
         <h4>{questao.pergunta}</h4>
         <div className = 'mainOpcao'> 
         {questao.options.map( (option, i) => {
            return(
               <div className = 'divInputLabel' key = {option}>
               <input  type="radio" id = {questao.id+option} onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> {
                setRespostaHistoria({...respostaHistoria , [questao.id] : option  } )               } }
             name={`his${questao.id}`} value= {option} />   
               <label key = {i}  htmlFor= {questao.id+option}>  {option}  </label>
              
               </div>
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
               <div className = 'divInputLabel' key = {option}>
               <input  type="radio" id = {questao.id+option} onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> {
                setRespostaGeografia({...respostaGeografia , [questao.id] : option  } )               } }
             name={`geo${questao.id}`} value= {option} />   
               <label key = {i}  htmlFor= {questao.id+option}>  {option}  </label>
              
               </div>
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
      <Link to = '/#' onClick = {limpar} >Cancelar</Link>
      <button onClick = {e => estado(e)}>Enviar</button>
   </div>
   </>
 )
}

export default Home