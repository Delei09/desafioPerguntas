import { createContext} from 'react'

type perguntaType =  {

 p1 : string,
 p2 : string,
 p3 : string,
 p4 : string,
 prop? : string

}

type contextType = {
 respHis : perguntaType,
 respMat : perguntaType,
 respGeo : perguntaType,
}
const ContextResposta   = createContext<contextType>( {} as contextType)
export default ContextResposta
