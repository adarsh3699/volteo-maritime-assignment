import "../css/content.css";

import UserInfo from "./UserInfo";
import Stream from "./Stream";
import ToDos from "./ToDos";

const notices = [
    {
        title: "Second Office Oliver",
        desc: "submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist",
        time: "UTC 1105 | LT +06:30"
    },
    {
        title: "Third Engineer Edward",
        desc: "submitted the Engine Log for 1200-1600 watch hour and completed the Handover Checklist",
        time: "UTC 1055 | LT +06:30"
    }
];

function Content() {
    return (
        <div id="content">
            <UserInfo
                post={"Third Officer"}
                fName={"Niranjan"}
                sName={"Pawar"}
                id={"86556"}
                lastActivity={"1200-1600 Watch "}
                lastActivityTime={"08:16 UTC"}
                shipName={"SGSIN - NOOSL"}
                lift={"Cargo First Lift"}
                nextPortName={"INVTZ1"}
                nextPortTime={"Nov 27, 1450 UTC"}
            />

            <Stream 
                streamName={"Ahoy Stream"}
                lastUpdate={"4 minutes"}
                importNotice={"Captain's Bridge Order dated Nov 27, 2020"}
                seenCount={1}
                notices={notices}
            />

            <ToDos
                todayDate={"Tuesday, March 2"}
            />
        </div>
    )
}

export default Content;