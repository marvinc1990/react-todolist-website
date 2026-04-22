import './TodoSearch.css';

function ToDoSearch() {
    return (
        <input
            className="TodoSearch"
            type="text"
            placeholder="Leer un libro ..."
            onChange={(event) => {
                console.log("Escribiste en el ToDo Search!");
                console.log(event); // Obtenemos el evento
                console.log(event.target); // Obtenemos el elemento HTML
                console.log(event.target.value); // Obtenemos el valor del elemento HTML
            }}></input>
    );
}

export { ToDoSearch };