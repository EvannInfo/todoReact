import React, { useState } from "react";
import { useSnapshot } from "valtio";
import AddTask from "./AddTask";
import List from "./List";
import { searchTasks, store } from "../../store/store";
import { filterIncomplete } from "../../store/store";
import { sortByPriority } from "../../store/store";
import { sortByTitle } from "../../store/store";
import { resetTasks } from "../../store/store";
import { sortByLow } from "../../store/store";
import { sortByMedium } from "../../store/store";
import { sortByHigh } from "../../store/store";
import { filterDate } from "../../store/store";

export default function Todos() {
  const snap = useSnapshot(store);
  const tasks = snap.tasks;
  const [searchText, setSearchText] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const index = editingIndex;

  


  return (
    <>
      <h1>Todo-List App</h1>
      <div style={{ marginBottom: "5px" }}><button onClick={() => sortByPriority()}>Sort : Priority</button>
      <button onClick={() => sortByTitle()}>Sort : Title</button></div>
      <button onClick={() => resetTasks()}>No Filter</button>
      <button onClick={() => filterIncomplete()}>Incomplete</button>
      <button onClick={() => filterDate()}>DateNow</button>
      
      <button onClick={() => sortByLow()}>Only Low</button>
      <button onClick={() => sortByMedium()}>Only Medium</button>
      <button onClick={() => sortByHigh()}>Only High</button>
      <input
        id="searchBar"
        type="text"
        placeholder="Search tasks..."
        onChange={(event) => {
          setSearchText(event.target.value);
          searchTasks(event.target.value, document.getElementById('searchBar').value);
        }}
      />

      <List
      />


      <AddTask />



    </>
  );
}
