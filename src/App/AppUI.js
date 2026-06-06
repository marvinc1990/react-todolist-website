import { ToDoCounter } from '../components/TodoCounter/index';
import { ToDoSearch } from '../components/TodoSearch/index';
import { ToDoList } from '../components/TodoList/index';
import { ToDoItem } from '../components/TodoItem/index';
import { ToDoCreateButton } from '../components/TodoCreateButton/index';

function AppUI({ completed, total, searchValue, setSearchValue, toDofiltered, completeToDo, deleteToDo }) {
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

export { AppUI };