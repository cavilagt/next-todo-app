'use client';
import React, { useContext } from "react";
import { TodoType } from "../types/State";
import AppContext from "../context/AppContext";
import Link from "next/link";
import { PAGES } from "./Constants";

type ComponentProps = {
  id?:number;
};

const TodoInfo: React.FunctionComponent<ComponentProps> = ({ id }) => {

  const { state } = useContext(AppContext);
  const todo = state?.todo

  return (
    <div>
      {
        todo?
        <>
          <h2>Task details</h2>
          <div className="ui segment">
            <div className="content">
              <label className="ui header">{todo.title}</label>
              <p>{todo.description}</p>
            </div>
          </div>
          <Link className="ui button primary" href={PAGES.HOME}>Go back</Link>
        </>
        :
        <div className="ui segment">No task selected</div>
    }
    </div>
  );
};

export default TodoInfo;
