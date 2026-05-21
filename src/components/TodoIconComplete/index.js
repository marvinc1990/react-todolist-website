import React from "react";
import { TodoIcon } from "../TodoIcon/index";

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