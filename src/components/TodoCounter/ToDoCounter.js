import './ToDoCounter.css';

function ToDoCounter({ completed, total }) {
    const isAllCompleted = completed === total && total !== 0;
    return (
        <h1 className="TodoCounter">
            {isAllCompleted ? (
                <div>🎉 ¡Felicidades! Completaste todos tus ToDos ({total})</div>
            ) : (
                <div>Has completado <span>{completed}</span> de <span>{total}</span> ToDos</div>
            )}
        </h1>
    );
}

export { ToDoCounter };