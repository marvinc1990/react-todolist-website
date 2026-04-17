import logo from './platzi.webp';
import './App.css';

function App() { //Este es un componente de React
  return (
    //Esto no es HTML, es JSX (sintaxis que combina javascript con xml)
    //No es class sino className
    //Este es un elemento de React que se van a transformar en elementos de HTML
    <div className="App">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function ToDoItem() {
  return (
    <li>
      <span>[ ]</span>
      <p>To Do Item</p>
      <span>x</span>
    </li>
  );
}


export default App;