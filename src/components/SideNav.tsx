import profileImage from "../assets/profile.jpeg";
import TasksGuide from "./TasksGuide";

function SideNav() {
    return (
        <div className="side-nav">
            <div className="profile-info">
                <div className="img-container">
                    <img draggable={false} src={profileImage} />
                </div>
                <div className="user-name">
                    DO-IT
                    <br />
                    <span>Yasser El3ntil</span>
                </div>
            </div>
            <span className="custom-border"></span>
            <TasksGuide />
        </div>
    );
}

export default SideNav;
