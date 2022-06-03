import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import "../css/toDos.css";

import cloudyIcon from "../img/cloudy.svg";
import deleteIcon from "../img/delete.svg";

function ToDos({
    todayDate
}) {
    const [text, setText] = useState("");
    const [toDos, setToDos] = useState([
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
        }
    ]);

    function handleTextChange(e) {
        const value = e.target.value;
        setText(value);
    }
    
    function handelCheckboxClick(index, isDone) {
        const newToDos = toDos.map(function (toDo, i) {
            return (i === index ? { ...toDo, isDone: isDone ? false : true } : toDo)
        })
        setToDos(newToDos);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setToDos([ ...toDos, {title:text, isDone: false, due: "7 days"} ]);
        setText("");
    }

    function handleDeleteToDoBtnClick(index) {
        let newToDos = toDos.filter((data, i) => {
            return (i !== index) ? data : null
        });
        setToDos(newToDos);
    }

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
                <form onSubmit={handleSubmit}>
                    <input id="addToDos" placeholder="Add Your ToDos" type="text" onChange={handleTextChange} value={text} />
                </form>
                {
                    toDos.map((item, index) => (
                        // <div key={index} className="eachToDo" style={item.isNear ? { border: "1px solid #E95454" } : {}}>
                         <div key={index} className={ item.isDone ? "eachToDoBorder eachToDo": "eachToDo"} style={item.isNear ? { border: "1px solid #E95454" } : {}}>
                            <div className="toDoEllpsis">
                                <img src={deleteIcon} onClick={() => handleDeleteToDoBtnClick(index)} height='20px' />
                            </div>
                            <div className="toDoInfo">

                                <Checkbox checked={item.isDone} color="success" onChange={() => handelCheckboxClick(index, item.isDone)} />

                                <div>
                                    <div style={item.isDone ? { textDecoration: "line-through" } : item.isNear ? { color: "#E95454" } : {}}>
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