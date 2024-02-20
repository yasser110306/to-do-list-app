import { Plus } from "lucide-react";
import TasksContainer from "./TasksContainer";

function TasksField() {
    return (
        <div className="tasks-field">
            <div className="container">
                <div className="input-container">
                    <div>
                        <span className=" bg-personal"></span>
                        <span className=" bg-freelance"></span>
                        <span className=" bg-work"></span>
                    </div>
                    <input type="text" />
                    <div className="add-task">
                        <Plus color="#d5a3fe" size={30} />
                    </div>
                </div>
                <TasksContainer />
            </div>
        </div>
    );
}

export default TasksField;
