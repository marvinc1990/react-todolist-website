import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useTodoService } from './useTodoService';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    /* Inicializar el valor de búsqueda */
    const [searchValue, setSearchValue] = React.useState('');
    /* Inicializar el estado del modal */
    const [openModal, setOpenModal] = React.useState(false);

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
        <TodoContext.Provider value={{
            completed,
            total,
            searchValue,
            setSearchValue,
            toDofiltered,
            completeToDo,
            deleteToDo,
            loading,
            error,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };