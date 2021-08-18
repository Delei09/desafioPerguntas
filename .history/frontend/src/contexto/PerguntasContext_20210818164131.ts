import { createContext} from 'react'

type perguntaType =  {
 pergunta: string;
 options: string[];
 resposta: string;
 id: string;
}[]

type contextType = {
 perguntasHistoria : perguntaType,
 perguntasMatematica : perguntaType,
 perguntasGeografia : perguntaType,
}
const ContextPerguntas   = createContext<contextType>( {} as contextType)
export default ContextPerguntas
