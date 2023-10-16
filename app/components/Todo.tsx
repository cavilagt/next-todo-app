'use client';
import React, { useContext } from "react";
import { TodoType } from "../types/State";

import styles from "./todo.module.css";
import AppContext from "../context/AppContext";

export type ComponentProps =  TodoType;

const Todo:React.FunctionComponent< ComponentProps > = ({ title, completed, id, description }) => {

  const { viewTodoDetails, deleteTodo, toggleTodoState} = useContext(AppContext);

  const onClickDelete = () => deleteTodo && deleteTodo( id );
  const onToggleTodo = () => toggleTodoState && toggleTodoState( id );
  const onViewTodoDetails = () => viewTodoDetails && viewTodoDetails( id );

  const statusClass = completed? `teal inverted ${styles.todo} ${styles.done}` : styles.todo;

  return (
    <div data-testid={id} className={`ui segment ${ statusClass }`} onDoubleClick={ onViewTodoDetails }>
      <div className={ styles.content }>
        <label className="ui header" >{title}</label>
        <p>{description}</p>
      </div>
      <div className={ styles.actions }>
        <span data-tooltip={completed? "Mark as incomplete" : "Mark as complete"}>
          <i className={`circle ${completed? "check " : ""}${styles.icon} icon big`} onClick={ onToggleTodo }></i>
        </span>
        <span data-tooltip="Details">
          <i className="info circle icon big" onClick={ onViewTodoDetails }></i>
        </span>
        <span data-tooltip="Delete">
          <i className="times circle icon big" onClick={ onClickDelete }></i>
        </span>
      </div>
    </div>
  );
};

export default Todo;
