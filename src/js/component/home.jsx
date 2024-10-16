import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task.trim()) {
            setTasks([...tasks, task]);
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="app">
            <div className="card px-5 py-2 w-50 mx-auto">
                <h1 className="text-center">todos</h1>
                <TodoInput addTask={addTask} />
                <TodoList tasks={tasks} deleteTask={deleteTask} />
				<p className="">{tasks.length} item left</p>
            </div>
        </div>
    );
}

export default App;
