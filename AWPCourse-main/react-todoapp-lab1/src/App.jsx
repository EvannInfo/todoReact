import React, { useState } from "react";
import AddTask from "./components/AddTask";
import List from "./components/List";
import { useRoutes, Link, useQueryParams } from 'raviger'
import EditTodo from "./components/EditTodo";
import Todos from "./components/Todos";

const routes = {
  '/': () => <Todos />,
  '/edit/:id': ({ id }) => <EditTodo id={id} />,
}

function App() {
  let route = useRoutes(routes)
  return (
    <>
      {route}
    </>
  );
}

export default App;