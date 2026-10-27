import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function ToDoSearch() {

    /* Obteniendo los valores del contexto */
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    /* Renderizando el campo de búsqueda */
    return (
        <input
            className="TodoSearch"
            type="text"
            placeholder="Buscar ..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}></input>
    );
}

export { ToDoSearch };