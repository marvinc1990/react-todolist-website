import './ToDoCreateButton.css';

function ToDoCreateButton() {
    return (
        <button
            className="CreateTodoButton"
            onClick={(event) => {
                console.log("Le diste click al botón +");
                console.log(event);
                console.log(event.target);
            }}
        >+</button>
    );
}

export { ToDoCreateButton };