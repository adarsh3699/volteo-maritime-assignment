import "../css/userInfo.css";

import HelloLogo from "../img/hello.svg";
import MerchantNavyLogo from "../img/merchantNavy.svg";
import CargoShip from "../img/cargoShip.svg";

function UserInfo({
    post,
    fName,
    sName,
    id,
    lastActivity,
    lastActivityTime,
    shipName,
    lift,
    nextPortName,
    nextPortTime,
}) {
    return (
        <div id="userInfo">
            <div id="basicInfo">
                <div id="basicInfoElement">
                    <div id="greeting">
                        <img src={HelloLogo} />
                        <img src={MerchantNavyLogo} />
                    </div>
                    <div id="post">{post}</div>
                    <div id="name">
                        <div>{fName}</div>
                        <div>{sName}</div>
                    </div>
                    <div id="crewId">Crew ID {id}</div>

                    <hr />
                    <div id="activity">My Last Activity</div>
                    <div id="activityLog">Submitted the Deck Log for <br />
                        <span>{lastActivity} </span> at {lastActivityTime}
                    </div>
                </div>
            </div>

            <div id="jobInfo">
                <div id="jobInfoElement">
                    <div id="shipName">
                        <img src={CargoShip} />
                        <div>{shipName}</div>
                    </div>
                    <div id="status">
                        <span>Statement of Facts</span> <br />
                        Current Status
                    </div>
                    <div id="lift">{lift}</div>
                    <hr />
                    <div id="nextPort">
                        <div>
                            <div className="port">Next Port Call</div>
                            <div id="portTime">{nextPortName}</div>
                        </div>
                        <div>
                            <div className="port">ETA</div>
                            <div id="portTime">{nextPortTime}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;