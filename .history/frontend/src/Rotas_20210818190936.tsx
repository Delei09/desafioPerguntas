import React from 'react';
import { useState } from 'react';
import Home from './page/Home';


const Rotas = () => {
 const [teste, setTeste] = useState<string>('inicio')
 console.log(teste)
 return(
  <Home set = {setTeste} />
 )
} ;

export default Rotas;