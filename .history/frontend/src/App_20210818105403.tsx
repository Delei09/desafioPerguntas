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


type perguntasType = []<object>
export const ContextPerguntas = createContext<perguntasType>( perguntas )

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
