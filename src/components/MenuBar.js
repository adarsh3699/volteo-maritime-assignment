import '../css/menuBar.css';

import HomeIcon from "../img/home.svg";
import WorkspaceIcon from "../img/workspace.svg";
import MarpolIcon from "../img/marpol.svg";
import HeartIcon from "../img/Heart.svg";
import InsightsIcon from "../img/insights.svg";
import HistoryIcon from "../img/history.svg";
import AppsIcon from "../img/apps.svg";
import SettingsIcon from "../img/settings.svg";

const menus = [
    {
        title: "Home",
        iconSrc: HomeIcon,
    },
    {
        title: "Workspace",
        iconSrc: WorkspaceIcon,
    },
    {
        title: "MARPOL",
        iconSrc: MarpolIcon,
    },
    {
        title: "OH&S",
        iconSrc: HeartIcon,
    },
    {
        title: "Insights",
        iconSrc: InsightsIcon,
    },
    {
        title: "History",
        iconSrc: HistoryIcon,
    },
    {
        title: "Apps",
        iconSrc: AppsIcon,
    },
    {
        title: "Settings",
        iconSrc: SettingsIcon,
    }
]

function MenuBar() {
    return (
        <div id='menuBar'>
            {
                menus.map((item, index)=> (
                    <div className={index == 0 ? "menus homeMenu" : "menus"} key={index}>
                        <div className={'memuBox'}>
                            <img src={item.iconSrc} />
                            <div>{item.title}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MenuBar;