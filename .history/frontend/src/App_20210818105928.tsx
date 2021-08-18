import { type } from 'os';
import React, { createContext} from 'react';
import Rotas from './Rotas';

const perguntas = [  {
  pergunta: 'Como importamos um componente externo?',
  options: [
    "opcao ",
    "opcao2",
    "opcao3",
  ],
  resposta: "opcao3",
  id: 'p2',
},{
  pergunta: 'Como importamos um componente externo?',
  options: [
    "opcao ",
    "opcao2",
    "opcao3",
  ],
  resposta: "opcao3",
  id: 'p2',
},{
  pergunta: 'Como importamos um componente externo?',
  options: [
    "opcao ",
    "opcao2",
    "opcao3",
  ],
  resposta: "opcao3",
  id: 'p2',
},{
  pergunta: 'Como importamos um componente externo?',
  options: [
    "opcao ",
    "opcao2",
    "opcao3",
  ],
  resposta: "opcao3",
  id: 'p2',
}]
type teste =  {
  pergunta: string;
  options: string[];
  resposta: string;
  id: string;
}[]

type perguntasType = Array<object>
export const ContextPerguntas   = createContext<teste>([])

function App() {

  return (
    <div className="App">
      <ContextPerguntas.Provider  value = {perguntas} >
        <Rotas />
      </ContextPerguntas.Provider>
    </div>
  );
}

export default App;
