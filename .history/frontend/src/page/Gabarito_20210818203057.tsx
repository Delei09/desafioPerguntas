import React , {useContext , useState}from 'react';
import Header from '../components/Header'
import ContainerMain  from '../components/ContainerMain';
import ContextPerguntas from '../contexto/PerguntasContext';
import '../styles/home.scss'

const Gabarito = (props : any) => {

 
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

   function estado(){
      
      if(respostaGeografia.p1 === '' || respostaGeografia.p2 === '' || respostaGeografia.p3 === '' || respostaGeografia.p4 === '' ||
      respostaHistoria.p1 === '' || respostaHistoria.p2 === '' || respostaHistoria.p3 === '' || respostaHistoria.p4 === '' ||
      respostaMatematica.p1 === '' || respostaMatematica.p2 === '' || respostaMatematica.p3 === '' || respostaMatematica.p4 === ''){
         setErro('Preencha todas as respostas')
   
      }else{
         setErro('')
         props.setMat(respostaMatematica)
         props.setHis(respostaHistoria)
         props.setGeo(respostaGeografia)

      }
         
   }
 return(
<>
   <Header titulo = 'Gabarito: Teste de Conhecimentos' />
  
   <ContainerMain titulo = 'Conhecimentos em Matemática'>
      {perguntasMatematica.map( (questao,i ) => {
      return(
         <div key={questao.id}>
         <h4>{questao.pergunta}</h4>
         <div className = 'mainOpcao'> 
         {questao.options.map( (option, i) => {
            return(
               <label key = {i}>  <input  type="radio" id = {questao.id} onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> {
                  setRespostaMatematica({...respostaMatematica , [questao.id] : option  } )               } }
               name={`mat${questao.id}`} value= {option} /> {option}  </label>
            )
         })}
         </div>
         {i < 3 ? <hr/> : ''} 
         </div>
      )   
      })}
   </ContainerMain>
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
               <label key = {i}>  <input name={`geo${questao.id}`}type="radio" id = {questao.id} onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> {
                  setRespostaGeografia({...respostaGeografia , [questao.id] : option  } )               } } 
               /> {option}  </label>
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
      <a href = '#' >Cancelar</a>
      <button onClick = {estado}>Enviar</button>
   </div>
   </>
 )
}

export default Gabarito