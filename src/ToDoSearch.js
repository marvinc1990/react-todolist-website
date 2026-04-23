import './TodoSearch.css';

function ToDoSearch({ searchValue, setSearchValue }) {
    return (
        <input
            className="TodoSearch"
            type="text"
            placeholder="Leer un libro ..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}></input>
    );
}

export { ToDoSearch };