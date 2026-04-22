import './TodoSearch.css';
import React from 'react';

function ToDoSearch() {
    // searchValue: estado a utilizar
    // setSearchValue: función para actualizar el estado
    // React.useState(''): inicializa el vacío el estado
    const [searchValue, setSearchValue] = React.useState('');

    return (
        <input
            className="TodoSearch"
            type="text"
            placeholder="Leer un libro ..."
            value={searchValue}
            onChange={(event) => {
                //console.log("Escribiste en el ToDo Search!");
                //console.log(event); // Obtenemos el evento
                //console.log(event.target); // Obtenemos el elemento HTML
                //console.log(event.target.value); // Obtenemos el valor del elemento HTML
                setSearchValue(event.target.value);
            }}></input>
    );
}

export { ToDoSearch };