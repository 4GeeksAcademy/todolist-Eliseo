import React from "react";
import "./TodoItem.css";

function TodoItem({ task, deleteTask }) {
    return (
        <li className="todo-item list-group-item d-flex justify-content-between">
            {task}
            <span className="eraseTask" onClick={deleteTask} style={{ cursor: "pointer", marginLeft: "10px" }}>❌</span>
        </li>
    );
}

export default TodoItem;
