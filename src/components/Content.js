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

const toDos = [
    {
        title: "Deck Log | 1200 - 1600 Watch",
        desc: "Assigned by Wayship",
        due: "2 hours",
        isNear: false,
        isDone: true
    },
    {
        title: "COVID19 Health Guidelines",
        desc: "Assigned by Technical",
        due: "2 days",
        isNear: true,
        isDone: false
    },
    {
        title: "Steering Check",
        desc: "Assigned by Captain",
        due: "2 hours",
        isNear: false,
        isDone: false
    },
    {
        title: "ECDIS Check",
        desc: "Assigned by Chief Officer",
        due: "6 hours",
        isNear: false,
        isDone: false
    },
    {
        title: "ECDIS Check",
        desc: "Assigned by Self",
        due: "8 hours",
        isNear: false,
        isDone: false
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
                toDos={toDos}
            />
        </div>
    )
}

export default Content;