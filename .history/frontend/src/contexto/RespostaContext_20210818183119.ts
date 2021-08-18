import { createContext} from 'react'

type perguntaType =  {

 p1 : string,
 p2 : string,
 p3 : string,
 p4 : string

}

type contextType = {
 perguntasHistoria : perguntaType,
 perguntasMatematica : perguntaType,
 perguntasGeografia : perguntaType,
}
const ContextResposta   = createContext<contextType>( {} as contextType)
export default ContextResposta
