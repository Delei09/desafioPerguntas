import React from 'react';
import { useState } from 'react';
import Home from './page/Home';
import { Route, Switch  } from 'react-router-dom'
import Resultado from './page/Resultado';
import Gabarito from './page/Gabarito';
import ContextResposta from './contexto/RespostaContext'; 

type perguntaType =  {

    p1 : string,
    p2 : string,
    p3 : string,
    p4 : string
   
   }

const Rotas = () => {
    const 
 const [respMat, setRespMat] = useState<perguntaType>({} as perguntaType)
 const [respHis, setRespHis] = useState<perguntaType>({} as perguntaType)
 const [respGeo, setRespGeo] = useState<perguntaType>({} as perguntaType)
console.log(respGeo)
 return(

    <Switch>
        <ContextResposta.Provider value = {{ respMat , respHis , respGeo }} >
            <Route exact  path = '/'>
                <Home setMat = {setRespMat} setHis = {setRespHis}  setGeo = {setRespGeo} />
            </Route>
            <Route  path = '/resultado'>
                <Resultado />
            </Route>
            <Route  path = '/gabarito'>
                <Gabarito />
            </Route>
      </ContextResposta.Provider>
  </Switch>
  
 )
} ;

export default Rotas;