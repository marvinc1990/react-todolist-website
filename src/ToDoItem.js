function ToDoItem(props) {
    return (
        <li>
            <input type="checkbox" />
            <p>{props.text}</p>
            <span>x</span>
        </li>
    );
}

export { ToDoItem };