import './ToDoCounter.css';

/*const estilos = {
    backgroundColor: 'red'
}*/

function ToDoCounter({ completed, total }) {
    return (
        /*<h1 style={{
            fontSize: '24px',
            textAlign: 'center',
            margin: 0,
            padding: '48px'
        }}>*/
        //<h1 style={estilos}>
        <h1 className="TodoCounter">
            Has completado <span>{completed}</span> de <span>{total}</span> ToDos
        </h1>
    );
}

export { ToDoCounter };