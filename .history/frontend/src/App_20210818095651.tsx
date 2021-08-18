import React, { createContext } from 'react';
import Rotas from './Rotas';


export const ContextPerguntas = createContext('')

function App() {
  return (
    <div className="App">
      <ContextPerguntas.Provider  value = 'teste'>
        <Rotas />
      </ContextPerguntas.Provider>
    </div>
  );
}

export default App;
