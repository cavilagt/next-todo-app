'use client';
import React from "react";

import { NewTodo, State } from "../types/State";
import { FilterActionType } from "../types/actions/FilterAction";
import { AppActions } from "../types/actions";

export const initialState: State = { todoList:[
    { id: '1', completed: false, title: "incompleted task 1", description:"That's just an incompleted task" },
    { id: '2', completed: false, title: "incompleted task 2", description:"That's just an incompleted task" },
    { id: '3', completed: false, title: "incompleted task 3", description:"That's just an incompleted task" },
    { id: '4', completed: true, title: "completed task", description:"That's just a completed task"},
    { id: '5', completed: true, title: "completed task 2", description:"That's just a completed task"},
  ], 
  pageTodoFilter:[],
};

export type AppContextType = {
  state:State;
  dispatch: ( action:AppActions ) => void;
  viewTodoDetails: ( id: string ) => void;
  toggleTodoState: ( id: string ) => void;
  deleteTodo: ( id: string ) => void;
  filterTodos: ( filter:FilterActionType ) => void;
  addTodo: ( data:NewTodo ) => void;
}

export default React.createContext<Partial<AppContextType>>({});
