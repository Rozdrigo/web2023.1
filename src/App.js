import './App.css';
import { AnonimalFunctionComponentMeusDados01, ArrowFunctionComponentMeusDados01, ClassComponentMeusDados01, NormalFunctionComponentMeusDados01 } from './components/atividade01/01MeusDados';
import { PropsAnonimalFunctionComponentMeusDados01, PropsArrowFunctionComponentMeusDados01, PropsClassComponentMeusDados01, PropsNormalFunctionComponentMeusDados01 } from './components/atividade01/02MeusDados';
import { Temperatura } from './components/atividade01/03Temperatura';

function App() {
  return (
    <div className="App">
        <NormalFunctionComponentMeusDados01></NormalFunctionComponentMeusDados01>
        <ArrowFunctionComponentMeusDados01></ArrowFunctionComponentMeusDados01>
        <AnonimalFunctionComponentMeusDados01></AnonimalFunctionComponentMeusDados01>
        <ClassComponentMeusDados01></ClassComponentMeusDados01>
        <PropsNormalFunctionComponentMeusDados01 nome="Rodrigo Silva Coelho" curso="Sistemas de Informação" universidade="UFC - Universidade Federal do Ceará"></PropsNormalFunctionComponentMeusDados01>
        <PropsArrowFunctionComponentMeusDados01 nome="Rodrigo Silva Coelho" curso="Sistemas de Informação" universidade="UFC - Universidade Federal do Ceará"></PropsArrowFunctionComponentMeusDados01>
        <PropsAnonimalFunctionComponentMeusDados01 nome="Rodrigo Silva Coelho" curso="Sistemas de Informação" universidade="UFC - Universidade Federal do Ceará"></PropsAnonimalFunctionComponentMeusDados01>
        <PropsClassComponentMeusDados01 nome="Rodrigo Silva Coelho" curso="Sistemas de Informação" universidade="UFC - Universidade Federal do Ceará"></PropsClassComponentMeusDados01>
        <Temperatura kelvin={10} celcios={10} fahrenheit={10}></Temperatura>
    </div>
  );
}

export default App;
