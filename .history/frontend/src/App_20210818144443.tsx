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


const perguntasHistoria= [  {
  pergunta: 'Na mitologia grega, Ares é considerado o deus da?',
  options: [
    "Morte",
    "Guerra",
    "Familia",
  ],
  resposta: "Guerra",
  id: 'p1',
},{
  pergunta: 'Como é chamada a Conjuração Baiana?',
  options: [
    "Revolta dos Alfaiates",
    "Guerra da Cisplatina",
    "Balaiada",
  ],
  resposta: "Revolta dos Alfaiates",
  id: 'p2',
},{
  pergunta: 'Uma das grandes descobertas do período Paleolítico foi?',
  options: [
    "O fogo",
    "A roda",
    "O sedentarismo",
  ],
  resposta: "O fogo",
  id: 'p3',
},{
  pergunta: 'Evento que marca o inicio da Idade Antiga?',
  options: [
    "A invenção da escrita",
    "A descoberta do fogo",
    "A invenção da roda",
  ],
  resposta: "A invenção da escrita",
  id: 'p4',
}]
type perguntaType =  {
  pergunta: string;
  options: string[];
  resposta: string;
  id: string;
}[]

type contextType = {
  perguntasHistoria : perguntaType,
  perguntasMatematica : perguntaType
}

export const ContextPerguntas   = createContext<contextType>( {} as contextType)

function App() {

  return (
    <div className="App">
      <ContextPerguntas.Provider  value = { {perguntasMatematica, perguntasHistoria} }  >
        <Rotas />
      </ContextPerguntas.Provider>
    </div>
  );
}

export default App;
