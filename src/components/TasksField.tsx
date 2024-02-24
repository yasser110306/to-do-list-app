import InputBar from "./InputBar";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

function TasksField() {
    const [tasks, setTasks] = useState<string[]>(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    const deleteTask = (indexToDelete: number) => {
        // Create a copy of the tasks array.
        const updatedTasks = [...tasks];

        // Remove the task at the specified index.
        updatedTasks.splice(indexToDelete, 1);

        // Update the state with the new array of tasks.
        setTasks(updatedTasks);
    };

    // updates the stored tasks when adding or deleting in the local storage.
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

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
                                {task}
                                <Trash2
                                    onClick={() => {
                                        deleteTask(index);
                                    }}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default TasksField;
