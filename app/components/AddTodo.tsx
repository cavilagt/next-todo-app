'use client';
import React, { useContext } from "react";
import { TodoForm } from "./TodoForm";
import AppContext from "../context/AppContext";
import { NewTodo } from "../types/State";

export const AddTodo = () => {
  const { addTodo } = useContext(AppContext);
  
  const onAddTodo = (data:NewTodo) => addTodo && addTodo(data);

  return (
    <div>
      <TodoForm formTitle="New Task" onSubmit={onAddTodo} />
    </div>
  );
};
