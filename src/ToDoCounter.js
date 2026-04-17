function ToDoCounter({ completed, total }) {
//function ToDoCounter(props) {
    return (
        <h1>Has completado {completed} de {total} ToDos</h1>
        //<h1>Has completado {props.completed} de {props.total} ToDos</h1>
    );
}

export { ToDoCounter };