import React from 'react';
import { useState } from 'react';
import Home from './page/Home';


const Rotas = () => {
 const [respMat, setRespMat] = useState<string>('inicio')
 const [respHis, setRespHis] = useState<string>('inicio')
 const [respGeo, setRespGeo] = useState<string>('inicio')
console.log(respGeo)
 return(
  //<Home setMat = {setRespMat} setHis = {setRespHis}  setGeo = {setRespGeo} />
 )
} ;

export default Rotas;