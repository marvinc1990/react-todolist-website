import './TodoItem.css';

function ToDoItem({ todo, listToDos, setListToDos }) {
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${todo.completed && "Icon-check--active"}`}
                onClick={(event) => {
                    listToDos = listToDos.map(item =>
                        item.id === todo.id
                            ? { ...item, completed: !todo.completed } : item);
                    setListToDos(listToDos);
                }}>
                V
            </span>
            <p className={`TodoItem-p ${todo.completed && "TodoItem-p--complete"}`}>
                {todo.text}
            </p>
            <span
                className="Icon Icon-delete"
                onClick={(event) => {
                    listToDos = listToDos.filter(item => item.id !== todo.id);
                    setListToDos(listToDos);
                }}>
                X
            </span>
        </li>
    );
}

export { ToDoItem };