import InputBar from "./InputBar";
import { useState } from "react";

function TasksField() {
    const [tasks, setTasks] = useState<string[]>([]);
    const onAddTask = (newTask: string) => {
        setTasks([...tasks, newTask]);
    };
    return (
        <div className="tasks-field">
            <div className="container">
                <InputBar onAddTask={onAddTask} />
                <ul className="tasks-container">
                    {tasks.map((task, index) => {
                        return (
                            <li className="task" key={index}>
                                {index + 1}- {task}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default TasksField;
