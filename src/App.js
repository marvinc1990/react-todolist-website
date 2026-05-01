import React from 'react';
import { ToDoCounter } from './components/TodoCounter/ToDoCounter';
import { ToDoSearch } from './components/TodoSearch/ToDoSearch';
import { ToDoList } from './components/TodoList/ToDoList';
import { ToDoItem } from './components/TodoItem/ToDoItem';
import { ToDoCreateButton } from './components/TodoCreateButton/ToDoCreateButton';

/*const defaultToDos = [
  { id: 1, text: "Lavarse los dientes", completed: true },
  { id: 2, text: "Tener la cama", completed: false },
  { id: 3, text: "Leer 30 minutos", completed: false },
  { id: 4, text: "Tomar 2 Lts de agua", completed: false }
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos));
localStorage.removeItem('TODOS_V1');*/

function App() {

  let parsedToDos = JSON.parse(localStorage.getItem('TODOS_V1')) || [];

  const [listToDos, setListToDos] = React.useState(parsedToDos);
  const [searchValue, setSearchValue] = React.useState('');

  const completed = listToDos.filter(t => t.completed).length;
  const total = listToDos.length;

  /* Obtener listado de ToDos filtrados */
  const toDofiltered = listToDos
    .filter(t => t.text.toLowerCase()
      .includes(searchValue.toLowerCase()));

  /* Creamos función Complete */
  const completeToDo = (id) => {
    const listUpdated = listToDos.map(item => item.id === id
      ? { ...item, completed: !item.completed } : item);
    saveToDos(listUpdated);
  };

  /* Creamos función Delete */
  const deleteToDo = (id) => {
    const listUpdated = listToDos.filter(item => item.id !== id);
    saveToDos(listUpdated);
  };

  /* Actualizar localstorage */
  const saveToDos = (newToDos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newToDos));
    setListToDos(newToDos);
  }

  return (
    <>
      <ToDoCounter completed={completed} total={total} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
        {toDofiltered.map(todo => (
          <ToDoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => { completeToDo(todo.id) }}
            onDeleted={() => { deleteToDo(todo.id) }}
          />
        ))}
      </ToDoList>
      <ToDoCreateButton />
    </>
  );
}

export default App;