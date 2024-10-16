import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask }) {
    return (
        <ul className="list-group">
            {tasks.length === 0 ? (
                <li className="list-group-item">No tasks, add a task</li>
            ) : (
                tasks.map((task, index) => (
                    <TodoItem key={index} task={task} deleteTask={() => deleteTask(index)} />
                ))
            )}
        </ul>
    );
}

export default TodoList;
