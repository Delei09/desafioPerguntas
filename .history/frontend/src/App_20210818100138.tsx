import React, { createContext, useEffect } from 'react';
import Rotas from './Rotas';
import axios from 'axios'


export const ContextPerguntas = createContext('')

function App() {

  useEffect( () => {
      axios.get('http://localhost:3005/perguntas')
        .then(resp => resp.data)
        .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <ContextPerguntas.Provider  value = 'teste'>
        <Rotas />
      </ContextPerguntas.Provider>
    </div>
  );
}

export default App;
