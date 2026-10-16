import { Header } from './components/Header'
import './App.css'


function App() {
  return (
    <>
      <Header 
      brand='Geração Tech'
      description='Sede Bezerra'>
        <a href="#equipe">Equipe</a>
        <a href="#aprendizado">Aprendizado</a>
      </Header>
    </>
  )
}

export default App
