import { Plus } from "lucide-react";
import { useState } from "react";

type inputChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface InputBarProps {
    onAddTask: (task: string) => void;
}

function InputBar({ onAddTask }: InputBarProps) {
    const [newTask, setNewTask] = useState("");

    const handleChange = (e: inputChangeEvent) => {
        setNewTask(e.target.value);
    };

    const handleSubmit = () => {
        onAddTask(newTask);
        setNewTask("");
    };

    return (
        <div className="input-container">
            <div>
                <span className=" bg-personal"></span>
                <span className=" bg-freelance"></span>
                <span className=" bg-work"></span>
            </div>

            <input type="text" value={newTask} placeholder="Add your new task..." onChange={handleChange} />

            <button className="add-task" onClick={handleSubmit}>
                <Plus color="#d5a3fe" size={30} />
            </button>
        </div>
    );
}

export default InputBar;
