import { useLocalStorage } from './useLocalStorage';

function useTodoService(listToDos, searchValue, saveToDos) {

    /* Calcular el número de ToDos completados y el total */
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

    /* Función para añadir un nuevo ToDo */
    const addToDo = (newTodoText) => {
        const newTodos = [...listToDos];
        newTodos.push({
            id: new Date().getTime(), // Genera un ID único basado en la fecha y hora actual
            text: newTodoText,
            completed: false,
        });
        saveToDos(newTodos);
    }

    return { completed, total, toDofiltered, completeToDo, deleteToDo, addToDo };

}

export { useTodoService };