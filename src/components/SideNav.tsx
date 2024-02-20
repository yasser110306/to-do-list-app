import profileImage from "../assets/profile.jpeg";

function SideNav() {
    return (
        <div className="side-nav">
            <div className="profile-info">
                <div className="img-container">
                    <img src={profileImage} />
                </div>
                <div className="user-name">
                    DO-IT
                    <br />
                    <span>Yasser El3ntil</span>
                </div>
            </div>
            <span className="custom-border"></span>
        </div>
    );
}

export default SideNav;
