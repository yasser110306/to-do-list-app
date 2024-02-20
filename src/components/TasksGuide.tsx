import { Calendar } from "lucide-react";

function TasksGuide() {
    return (
        <div className="tasks-guide">
            <h1>
                <Calendar color="#d5a3fe" />
                Today Tasks
            </h1>
            <ul className="tasks-types">
                <li>
                    <span className=" bg-personal"></span> Personal
                </li>
                <li>
                    <span className=" bg-freelance"></span> Freelance
                </li>
                <li>
                    <span className=" bg-work"></span> Work
                </li>
            </ul>
        </div>
    );
}

export default TasksGuide;
