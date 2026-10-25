import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
import { useTodoService } from './useTodoService';

/*const defaultToDos = [
  { id: 1, text: "Lavarse los dientes", completed: true },
  { id: 2, text: "Tender la cama", completed: false },
  { id: 3, text: "Leer 30 minutos", completed: false },
  { id: 4, text: "Tomar 2 Lts de agua", completed: false }
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos));
localStorage.removeItem('TODOS_V1');*/

function App() {

  /* Inicializar el valor de búsqueda */
  const [searchValue, setSearchValue] = React.useState('');

  /* Obtener lista de items, función para guardar, y estados de carga y error */
  const {
    items: listToDos,
    saveItems: saveToDos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  /* Obtener atributos, lista filtrada y funciones de gestión */
  const {
    completed,
    total,
    toDofiltered,
    completeToDo,
    deleteToDo
  } = useTodoService(listToDos, searchValue, saveToDos);

  return (
    <AppUI
      completed={completed}
      total={total}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      toDofiltered={toDofiltered}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
      loading={loading}
      error={error}
    />
  );
}

export default App;