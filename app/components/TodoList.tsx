import React from "react";

import Todo from "./Todo";
import { TodoType } from "../types/State";

type TodoListProps = {
  todos?: TodoType[];
}

const TodoList:React.FunctionComponent<TodoListProps> = ({todos =[] }) => {
  return (
    <div className="ui segments">
      {
        todos.length === 0
        ? <div className="ui segment">No tasks to show</div>
        : todos.map( todo => (
          <Todo key={todo.id} {...todo} />))
      }
  </div>
  );
};

export default TodoList;
