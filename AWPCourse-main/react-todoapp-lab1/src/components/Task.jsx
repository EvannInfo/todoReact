import React, { useState } from "react";
import { editTask } from "../../store/store";
import { store } from "../../store/store";
import { changeDone } from "../../store/store";
import { navigate } from "raviger";

export default function Task(props) {
  const task = store.tasks[props.index];
  let colorI = "green";
  if (task.priority == 3) {
    colorI = "#ff4019";
  } else if (task.priority == 2) {
    colorI = "#f68620";
  } else {
    colorI = "#f2cc27";
  }
  return (
    <>
      {(
        <>
          <div style={{ display: "flex", color: "white" }}>
            <div>
              <input type="checkbox" checked={task.done} onChange={() => props.changeDone(props.index)} />
              <label htmlFor={props.index}>{store.tasks[props.index].text}</label><label style={{ color: colorI }}>⬟</label>
              <div style={{ height: "15px" }}></div>
              <div>Description :</div>
              <div style={{ width: "450px", wordBreak: "break-all" }}>{store.tasks[props.index].description}</div>
            </div>
            <div style={{ marginLeft: "auto", color: "white" }}>
              <button className="editButton" onClick={() => navigate("/edit/" + props.index)}>
                Edit
              </button>
              <button className="deleteButton" onClick={() => props.deleteTask(props.index)}>
                Delete
              </button>
              <div style={{ height: "25px" }}></div>
              <div>{store.tasks[props.index].dueDate}</div>
            </div>
          </div>
        </>
      )}
    </>


  );
}
