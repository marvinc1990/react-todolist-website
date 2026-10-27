import React from 'react';
import ReactDOM from 'react-dom';

function TodoModal({ children }) {
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { TodoModal };