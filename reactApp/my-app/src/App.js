import './style.css';
import logo from './logo.png';
import SprawdzDostawce from './function/SprawdzDostawce';
import Formalna from './function/Formalna';
import Transakcyjna from './function/Tranzakcyjna';
import WAkceptacji from './function/WAkceptacji';
import Wszystkie from './function/Wszystkie';
import DoAkceptacji from './function/DoAkceptacji';
import Zaakceptowano from './function/Zaakceptowano';
import MojeKonto from './function/MojeKonto';
import Zgloszenie from './function/Zgloszenie';
import _default from 'react-bootstrap/esm/Accordion';

function App() {
  return <ZgloszenieFun />;
}

function SprawdzDostawceFun() {
  return <SprawdzDostawce />;
}

function FormalnaFun() {
  return <Formalna />;
}

function TransakcyjnaFun() {
  return <Transakcyjna />;
}

function WAkceptacjiFun() {
  return <WAkceptacji />;
}

function WszystkieFun() {
  return <Wszystkie />;
}

function DoAkceptacjiFun() {
  return <DoAkceptacji />;
}

function ZaakceptowanoFun() {
  return <Zaakceptowano />;
}

function MojeKontoFun() {
  return <MojeKonto />;
}

function ZgloszenieFun() {
  return <Zgloszenie />;
}

export default App;
