import React from "react";
import { TodoIcon } from "../TodoIcon/TodoIcon";

function TodoIconComplete({ completed, onCompleted }) {
    return (
        <TodoIcon
            type={"check"}
            color={completed ? "green" : "gray"}
            onClick={onCompleted}
        />
    );
}

export { TodoIconComplete };