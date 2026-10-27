import React from 'react';
import { TodoContext } from '../TodoContext';
import './ToDoCounter.css';

function ToDoCounter() {
    /* Obteniendo los valores del contexto */
    const { completed, total } = React.useContext(TodoContext);

    /* Verificando si todos los ToDos están completados */
    const isAllCompleted = completed === total && total !== 0;

    /* Renderizando el contador */
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