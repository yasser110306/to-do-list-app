import SideNav from "./components/SideNav";
import TasksField from "./components/TasksField";
import "./styles/App.css";

function App() {
    return (
        <div className=" flex w-full">
            <SideNav />
            <TasksField />
        </div>
    );
}

export default App;
