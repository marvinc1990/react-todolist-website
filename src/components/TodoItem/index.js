import { TodoIconComplete } from '../TodoIconComplete/index';
import { TodoIconDelete } from '../TodoIconDelete/index';
import './TodoItem.css';

function ToDoItem(props) {
    return (
        <li className="TodoItem">
            <TodoIconComplete completed={props.completed} onCompleted={props.onCompleted} />
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <TodoIconDelete onDeleted={props.onDeleted} />
        </li>
    );
}

export { ToDoItem };