import './App.css'
import Greetings from './components/Greetings'
import { Header } from './components/Header'

const user = window.prompt("Qual seu nome?") || "Visitante";

function App() {
  return (
    <>
      <Header/>
      <Greetings nome={user}/>
    </>
  )
}

export default App
