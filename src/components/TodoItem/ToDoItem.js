import { TodoIconComplete } from '../TodoIconComplete/TodoIconComplete';
import { TodoIconDelete } from '../TodoIconDelete/TodoIconDelete';
import './TodoItem.css';

function ToDoItem(props) {
    return (
        <li className="TodoItem">
            {/*<span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onCompleted}>
                V
            </span>*/}
            <TodoIconComplete />
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <TodoIconDelete />
            {/*<span className="Icon Icon-delete" onClick={props.onDeleted}>
                X
            </span>*/}
        </li>
    );
}

export { ToDoItem };