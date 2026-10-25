import { ToDoCounter } from '../components/TodoCounter/index';
import { ToDoSearch } from '../components/TodoSearch/index';
import { ToDoList } from '../components/TodoList/index';
import { ToDoItem } from '../components/TodoItem/index';
import { ToDoCreateButton } from '../components/TodoCreateButton/index';

/* Componente UI principal para la aplicación, separado de la lógica */
function AppUI({ completed, total, searchValue, setSearchValue, toDofiltered, completeToDo, deleteToDo, loading, error }) {
    return (
        <>
            <ToDoCounter completed={completed} total={total} />
            <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <ToDoList>

                {loading && <p>Estamos cargando...</p>}
                {error && <p>Hubo un error...</p>}
                {(!loading && !error && toDofiltered.length === 0) && <p>Crea tu primer ToDo</p>}

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