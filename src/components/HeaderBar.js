import "../css/headerBar.css"
import shipIcon from "../img/ship.svg"
import logoutBtn from "../img/logoutBtn.svg"

function HeaderBar({
    crewMates,
    active,
    time,
}) {
    return (
        <div id="headerBar">
            <div id="aboutUser">
                <img src={shipIcon} id="shipIcon" />
                <div>
                    <div id="title">Demo Vessel</div>
                    <div id="crewmates">{crewMates} Crewmates ·
                        <span> {active} Active</span>
                    </div>
                </div>
            </div>

            <div id="time-logout">
                <div id="time">{time}</div>
                <img src={logoutBtn} />
            </div>
        </div>
    )
}

export default HeaderBar;