import "../css/toDos.css";

import cloudyIcon from "../img/cloudy.svg";
import checkedFilledIcon from "../img/checked-filled.svg";
import checkIcon from "../img/check.svg";
import ellipsisIcon from "../img/ellipsis.svg";

function ToDos({
    todayDate,
    toDos,
}) {
    return (
        <div id="toDosContent">
            <div id="toDosElement">
                <div id="myDay">
                    <div>
                        <div id="myDayTitle">My Day</div>
                        <div id="myDayDate">{todayDate}</div>
                    </div>
                    
                    <img src={cloudyIcon} />
                </div>

                {
                    toDos.map((item, index)=> (
                        <div key={index} className="eachToDo" style={ item.isNear ? { border: "1px solid #E95454"}: {}}>
                            <div className="toDoEllpsis">
                                <img src={ellipsisIcon} />
                            </div>
                            <div className="toDoInfo">
                                <img src={ item.isDone ? checkedFilledIcon: checkIcon} />

                                <div>
                                    <div style={ item.isDone ? { textDecoration: "line-through"}: item.isNear ? { color: "#E95454" }: {}}>
                                        {item.title}
                                    </div>
                                    <div className="toDoDesc">{item.desc} | Due in {item.due}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ToDos;