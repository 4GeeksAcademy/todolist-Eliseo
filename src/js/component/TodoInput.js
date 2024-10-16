import React, { useState } from "react";

function TodoInput({ addTask }) {
    const [task, setTask] = useState("");

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addTask(task);
            setTask("");
        }
    };

    return (
        <input
            className="form-control my-2"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
        />
    );
}

export default TodoInput;
