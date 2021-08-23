import Rotas from './Rotas';
import ContextPerguntas  from './contexto/PerguntasContext';
import {BrowserRouter } from 'react-router-dom'


const perguntasMatematica= [  {
  pergunta: 'Quanto é 2 + 2?',
  options: [
    "1",
    "2",
    "4",
  ],
  resposta: "4",
  id: 'p1',
},{
  pergunta: 'Quanto é 7 X 10?',
  options: [
    "7",
    "70",
    "77",
  ],
  resposta: "70",
  id: 'p2',
},{
  pergunta: 'Quanto é 10 x 10?',
  options: [
    "0",
    "10",
    "100",
  ],
  resposta: "100",
  id: 'p3',
},{
  pergunta: 'Quanto é 100 x 100?',
  options: [
    "10000",
    "1000",
    "100000",
  ],
  resposta: "10000",
  id: 'p4',
}]

const perguntasHistoria= [  {
  pergunta: 'Na mitologia grega, Ares é considerado o deus da?',
  options: [
    "Morte",
    "Guerra",
    "Familia",
  ],
  resposta: "Guerra",
  id: 'p1',
},{
  pergunta: 'Como é chamada a Conjuração Baiana?',
  options: [
    "Revolta dos Alfaiates",
    "Guerra da Cisplatina",
    "Balaiada",
  ],
  resposta: "Revolta dos Alfaiates",
  id: 'p2',
},{
  pergunta: 'Uma das grandes descobertas do período Paleolítico foi?',
  options: [
    "O fogo",
    "A roda",
    "O sedentarismo",
  ],
  resposta: "O fogo",
  id: 'p3',
},{
  pergunta: 'Evento que marca o início da Idade Antiga?',
  options: [
    "A invenção da escrita",
    "A descoberta do fogo",
    "A invenção da roda",
  ],
  resposta: "A invenção da escrita",
  id: 'p4',
}]


const perguntasGeografia= [  {
  pergunta: 'Qual é a capital do Acre?',
  options: [
    "Rio Branco",
    "Rio de janeiro",
    "Palmas",
  ],
  resposta: "Rio Branco",
  id: 'p1',
},{
  pergunta: 'O Brasil é de qual continente?',
  options: [
    "America do norte",
    "America do sul",
    "Europa",
  ],
  resposta: "America do sul",
  id: 'p2',
},{
  pergunta: 'Qual a capital da Guatemala?',
  options: [
    "Guatemala",
    "Lisboa",
    "Madagascar",
  ],
  resposta: "Guatemala",
  id: 'p3',
},{
  pergunta: 'Quantos países tem a América?',
  options: [
    "37",
    "50",
    "23",
  ],
  resposta: "37",
  id: 'p4',
}]

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ContextPerguntas.Provider  value = { {perguntasMatematica, perguntasHistoria, perguntasGeografia } } >
            <Rotas />
      </ContextPerguntas.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
