import './ToDoCreateButton.css';

function ToDoCreateButton({setOpenModal}) {
    return (
        <button
            className="CreateTodoButton"
            onClick={() => {
                setOpenModal(state => !state);
            }}
        >+</button>
    );
}

export { ToDoCreateButton };