import { ToDoCounter } from '../components/TodoCounter/index';
import { ToDoSearch } from '../components/TodoSearch/index';
import { ToDoList } from '../components/TodoList/index';
import { ToDoItem } from '../components/TodoItem/index';
import { ToDoCreateButton } from '../components/TodoCreateButton/index';
import { TodoLoading } from '../components/TodoLoading/index';
import { TodoError } from '../components/TodoError/index';
import { TodoEmpty } from '../components/TodoEmpty/index';

/* Componente UI principal para la aplicación, separado de la lógica */
function AppUI({ completed, total, searchValue, setSearchValue, toDofiltered, completeToDo, deleteToDo, loading, error }) {
    return (
        <>
            <ToDoCounter completed={completed} total={total} />
            <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <ToDoList>

                {loading &&
                    <>
                        <TodoLoading />
                        <TodoLoading />
                        <TodoLoading />
                    </>
                }
                {error && <TodoError />}
                {(!loading && !error && toDofiltered.length === 0) && <TodoEmpty />}

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