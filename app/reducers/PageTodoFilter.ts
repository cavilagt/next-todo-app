import { FilterActionType } from "../types/actions/FilterAction";
import { State } from "../types/State";
import { AppActions } from "../types/actions";

const pageTodoFilterReducer = (state: State, action: AppActions) => {
  switch (action.type) {
    case FilterActionType.SHOW_ALL:
      return [...state.todoList.map( todo => todo )];

    case FilterActionType.SHOW_COMPLETED:
      return [...state.todoList.filter(todo => todo.completed)];
    
    case FilterActionType.SHOW_INCOMPLETED:
      return [...state.todoList.filter(todo => !todo.completed)];
    
    default:
      return state.pageTodoFilter;
  }
};

export default pageTodoFilterReducer;
