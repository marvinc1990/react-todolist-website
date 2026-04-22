import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { ToDoCreateButton } from './ToDoCreateButton';

const defaultToDos = [
  { text: "Lavarse los dientes", completed: true },
  { text: "Tener la cama", completed: false },
  { text: "Leer 30 minutos", completed: false },
  { text: "Tomar 2 Lts de agua", completed: false }
];

function App() {
  return (
    <>
      <ToDoCounter completed={3} total={5} />
      <ToDoSearch />
      <ToDoList>
        {defaultToDos.map(todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ToDoList>
      <ToDoCreateButton />
    </>
  );
}

export default App;