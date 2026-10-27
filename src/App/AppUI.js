import React from 'react';
import { ToDoCounter } from '../components/TodoCounter/index';
import { ToDoSearch } from '../components/TodoSearch/index';
import { ToDoList } from '../components/TodoList/index';
import { ToDoItem } from '../components/TodoItem/index';
import { ToDoCreateButton } from '../components/TodoCreateButton/index';
import { TodoLoading } from '../components/TodoLoading/index';
import { TodoError } from '../components/TodoError/index';
import { TodoEmpty } from '../components/TodoEmpty/index';
import { TodoContext } from '../components/TodoContext';
import { TodoModal } from '../components/TodoModal/index';

/* Componente UI principal para la aplicación, separado de la lógica */
function AppUI() {

    const {
        loading,
        error,
        toDofiltered,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <>
            <ToDoCounter />
            <ToDoSearch />
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

            {/* Envolviendo la lista con el contexto */}
            {/*<TodoContext.Consumer>
                {({
                    loading, error,...
                }) => (
                    <ToDoList></ToDoList>
                )}
            </TodoContext.Consumer>*/}

            <ToDoCreateButton setOpenModal={setOpenModal} />
            {openModal && (
                <TodoModal>
                    La funcionalidad del modal.
                </TodoModal>
            )}
        </>
    );
}

export { AppUI };