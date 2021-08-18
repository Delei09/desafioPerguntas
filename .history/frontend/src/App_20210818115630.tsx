import React, { createContext} from 'react';
import Rotas from './Rotas';

const perguntasMatematica= [  {
  pergunta: 'Quanto é 2 + 2?',
  options: [
    "1",
    "2",
    "4",
  ],
  resposta: "4",
  id: 'p1',
},{
  pergunta: 'Quanto é 2 x 2?',
  options: [
    "0",
    "1",
    "4",
  ],
  resposta: "4",
  id: 'p2',
},{
  pergunta: 'Quanto é 10 x 10?',
  options: [
    "0",
    "10",
    "100",
  ],
  resposta: "100",
  id: 'p3',
},{
  pergunta: 'Quanto é 10 - 10?',
  options: [
    "0",
    "10",
    "100",
  ],
  resposta: "0",
  id: 'p4',
}]
type teste =  {
  pergunta: string;
  options: string[];
  resposta: string;
  id: string;
}[]

export const ContextPerguntas   = createContext<teste>([])

function App() {

  return (
    <div className="App">
      <ContextPerguntas.Provider  value = {perguntasMatematica} >
        <Rotas />
      </ContextPerguntas.Provider>
    </div>
  );
}

export default App;
