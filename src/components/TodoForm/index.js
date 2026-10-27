import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {

    /* Estado para el nuevo ToDo */
    const [newTodoValue, setNewTodoValue] = React.useState('');
    /* Obtenemos los valores del contexto */
    const { setOpenModal, addToDo } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
                placeholder="Agrega tu nuevo ToDo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}>Cancelar</button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };