import "../css/stream.css";

import syncIcon from "../img/sync.svg";
import paperclipIcon from "../img/paperclip.svg";
import eyeIcon from "../img/eye.svg";

function Stream({
    streamName,
    lastUpdate,
    importNotice,
    seenCount,
    notices,
}) {
    return (
        <div id="stream">
            <div id="streamElement">
                <div id="streamSync">
                    <div>{streamName}</div>
                    <img src={syncIcon} />
                </div>
                <div id="lastUpdate">Last updated - {lastUpdate} ago</div>

                <div id="noticeContent">
                    <div id="importNotice">
                        <span>Important Notice</span>
                        <img src={paperclipIcon} />
                    </div>

                    <div id="notice">{importNotice}</div>

                    <div id="seen">
                        <div id="seenCount"><img src={eyeIcon} /> {seenCount}</div>
                        <div id="readBtn">read</div>
                    </div>
                </div>

                {
                    notices.map((item, index)=> (
                        <div key={index} className="eachNotice">
                            <span>{item.title + " "}</span>
                            {item.desc}

                            <div className="eachNoticeTime">{item.time}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Stream;