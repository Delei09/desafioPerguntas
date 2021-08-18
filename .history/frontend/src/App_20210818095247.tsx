import React, { createContext } from 'react';
import Rotas from './Rotas';


const ContextPerguntas = createContext('teste')

function App() {
  return (
    <div className="App">
     <Rotas />
    </div>
  );
}

export default App;
