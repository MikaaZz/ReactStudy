import './App.css'
import HelloWorld from './components/HelloWorld'
import Frase from './components/Frase'
import SayMyName from './components/SayMyName'
/*AREA EXTERNA APENAS PARA IMPORTAR COISAS*/
function App() {
  /*AREA INTERNA APENAS PARA LOGICAS E VARIAVEIS*/
  const name = 'Mikhael'
  const nome = 'Leticia'
  function sun (a,b) {
    return a+b
  }
  const url = 'http://via.placeholder.com/150'
  return (
    /*AREA INTERNA JSX VAI O HTML*/
    /*SEMPRE UTILIZAR "className" SE NAO NAO FUNCIONA*/
    <div className="App">   
      <header className="App-header">
        <h1>Hello React TEST JSX</h1>
        <p>Hello {name}</p>
        <p>Soma: {sun(1,2)}</p>
        <img src={url} alt="Minha imagem" />
        <Frase />
      </header>
      <HelloWorld />
      <SayMyName nome="Mikhael" />
      <SayMyName nome="Zika" />
      <SayMyName nome={nome} />
    </div>
  );
}

export default App;
/*AREA EXTERNA APENAS PARA EXPORTAR COISAS*/