import { type } from 'os';
import React, { createContext} from 'react';
import Rotas from './Rotas';

const perguntas = [  {
  pergunta: 'Quanto é 2 + 2?',
  options: [
    "1",
    "2",
    "4",
  ],
  resposta: "opcao3",
  id: 'p2',
},{
  pergunta: 'Quanto é 2 x 2?',
  options: [
    "0",
    "1",
    "4",
  ],
  resposta: "opcao3",
  id: 'p2',
},{
  pergunta: 'Quanto é 10 x 10',
  options: [
    "0",
    "10",
    "100",
  ],
  resposta: "opcao3",
  id: 'p2',
},{
  pergunta: 'Quanto é 10 - 10?',
  options: [
    "0",
    "10",
    "100",
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

export const ContextPerguntas   = createContext<teste>(perguntas)

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
