import './TodoSearch.css';

function ToDoSearch({ searchValue, setSearchValue }) {
    return (
        <input
            className="TodoSearch"
            type="text"
            placeholder="Buscar ..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}></input>
    );
}

export { ToDoSearch };