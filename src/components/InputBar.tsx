import { Plus } from "lucide-react";
import { useState } from "react";

type inputChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface InputBarProps {
    onAddTask: (task: string) => void;
}

function InputBar({ onAddTask }: InputBarProps) {
    const [newTask, setNewTask] = useState("");

    const handleChange = (event: inputChangeEvent) => {
        setNewTask(event.target.value);
    };

    const handleSubmit = () => {
        if (newTask) {
            onAddTask(newTask);
            setNewTask("");
        }
    };

    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (newTask && event.key === "Enter") {
            onAddTask(newTask);
            setNewTask("");
        }
    };

    return (
        <div className="input-container">
            <div>
                <span className=" bg-personal"></span>
                <span className=" bg-freelance"></span>
                <span className=" bg-work"></span>
            </div>

            <input
                type="text"
                onKeyDown={handleEnter}
                value={newTask}
                placeholder="Add your new task..."
                onChange={handleChange}
            />

            <button className="add-task" onClick={handleSubmit}>
                <Plus color="#d5a3fe" size={30} />
            </button>
        </div>
    );
}

export default InputBar;
