import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../components/TodoContext';

function App() {
  return (
    /* Envolviendo la aplicación con el proveedor de contexto */
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;