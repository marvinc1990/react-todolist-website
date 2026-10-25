import React from 'react';

/* Custom hook para gestionar el localStorage */
function useLocalStorage(itemName, initialValue) {

    /* Inicializar estados */
    const [items, setItems] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    /* 
        Efecto para cargar los datos del localStorage

       ¿Por qué usamos useEffect? Porque queremos que se ejecute una vez al montar 
       el componente, y no en cada renderizado. Esto nos permite simular una carga 
       de datos desde un servidor o base de datos, y manejar los estados de carga 
       y error de manera más eficiente.

    */
    React.useEffect(() => {
        setTimeout(() => {
            try {
                /* Inicializar el valor */
                let parsedItem;
                /* Obtener el valor del localStorage */
                const localStorageItem = localStorage.getItem(itemName);
                /* Parsear el valor */
                if (!localStorageItem) {
                    parsedItem = initialValue;
                    /* Guardar el valor inicial en el localStorage
                       SetItem de localstorage es diferente al setItem del estado */
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    /* Actualizar el estado con el valor obtenido del localStorage */
                    setItems(parsedItem);
                }
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }, 2000);
    }, []);

    /* Función para actualizar el localStorage */
    const saveItems = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItems(newItem);
    };

    return { items, saveItems, loading, error };
}

export { useLocalStorage };