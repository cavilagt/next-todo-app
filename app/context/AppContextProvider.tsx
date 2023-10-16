'use client';
import React, { useState, useReducer } from "react";
import rootReducer from "../reducers";
import AppContext, { initialState } from "./AppContext";
import { FilterActionType } from "../types/actions/FilterAction";
import { TodoActionType } from "../types/actions/TodoAction";
import { PAGES } from "../components/Constants";
import { NewTodo } from "../types/State";
import { useRouter } from "next/navigation";

type ComponentProps = {
  children: React.ReactNode,
};

const AppContextProvider:React.FunctionComponent<ComponentProps> = ({ children }) => {
    const [ state, dispatch ] = useReducer( rootReducer, initialState );
    const [ filter, setFilter ] = useState(FilterActionType.SHOW_INCOMPLETED);
    const router = useRouter();

    const deleteTodo = ( id:string ) =>{
      dispatch({ type:TodoActionType.REMOVE_TODO, id });
      dispatch({ type:filter });
    }
    
    const filterTodos = ( filter:FilterActionType ) => {
      dispatch({ type:filter });
      setFilter( filter );
      router.push(PAGES.HOME);
    };
  
    const toggleTodoState = ( id:string ) =>{
      dispatch({ type:TodoActionType.TOGGLE_TODO, id });
      dispatch({ type:filter });
    }
  
    const viewTodoDetails = ( id:string ) => {
      dispatch({ type:TodoActionType.VIEW_DETAILS, id });
      router.push(`${PAGES.DETAIL}/${id}`);
    }
  
    const addTodo = ( data:NewTodo ) => {
      dispatch({ type: TodoActionType.ADD_TODO, title: data.title, description: data.description });
      dispatch({ type: FilterActionType.SHOW_ALL });
      setFilter(FilterActionType.SHOW_INCOMPLETED);
      router.push(PAGES.HOME);
    }

    const providerValue = { state, dispatch, deleteTodo,
        filterTodos, toggleTodoState, viewTodoDetails, addTodo };
    
    return (
      <AppContext.Provider value={ providerValue }>
        {children}
      </AppContext.Provider>
    );
  }

  export default AppContextProvider;