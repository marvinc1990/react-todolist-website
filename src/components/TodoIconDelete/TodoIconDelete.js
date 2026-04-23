import React from "react";
import { TodoIcon } from "../TodoIcon/TodoIcon";

function TodoIconDelete({ onDeleted }) {
    return (
        <TodoIcon
            type={"delete"}
            color={"gray"}
            onClick={onDeleted}
        />
    );
}

export { TodoIconDelete };