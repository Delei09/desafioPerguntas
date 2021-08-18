import React, { createContext, useEffect } from 'react';
import Rotas from './Rotas';
import axios from 'axios'

const perguntas = [  {
  pergunta: 'Como importamos um componente externo?',
  options: [
    "opcao ",
    "opcao2",
    "opcao3",
  ],
  resposta: "opcao3",
  id: 'p2',
},
{
  pergunta: 'Como importamos um componente externo?',
  options: [
    "opcao ",
    "opcao2",
    "opcao3",
  ],
  resposta: "opcao3",
  id: 'p2',
} ,
{
  pergunta: 'Como importamos um componente externo?',
  options: [
    "opcao ",
    "opcao2",
    "opcao3",
  ],
  resposta: "opcao3",
  id: 'p2',
}];
type perguntasType = {
  
    pergunta : string ,
    opcao : '[string]' ,
    resposta : string,
    id : string
}
export const ContextPerguntas = createContext<[perguntasType]>()

function App() {

  useEffect( () => {
      axios.get('http://localhost:3005/perguntas')
        .then(resp => resp.data)
        .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <ContextPerguntas.Provider  value = {perguntas} >
        <Rotas />
      </ContextPerguntas.Provider>
    </div>
  );
}

export default App;
