import React from 'react';
import { useState } from 'react';
import Home from './page/Home';
import { Route, Switch  } from 'react-router-dom'
import Resultado from './page/Resultado';
import Gabarito from './page/Gabarito';


const Rotas = () => {
 const [respMat, setRespMat] = useState<string>('inicio')
 const [respHis, setRespHis] = useState<string>('inicio')
 const [respGeo, setRespGeo] = useState<string>('inicio')
console.log(respGeo)
 return(
    <Switch>
       <Route exact  path = '/'>
           <Home setMat = {setRespMat} setHis = {setRespHis}  setGeo = {setRespGeo} />
      </Route>
      <Route  path = '/resultado'>
          <Resultado />
      </Route>
      <Route  path = '/gabarito'>
          <Gabarito />
      </Route>
  </Switch>
  
 )
} ;

export default Rotas;