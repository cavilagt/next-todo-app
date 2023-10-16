import { AppActions } from "../types/actions";
import { State, TodoType } from "../types/State";
import { TodoActionType } from "../types/actions/TodoAction";
import { uid } from "uid";

const defaultValue:TodoType = {
  id: uid(),
  title: "",
  description: "",
  completed: false
}

const detailsReducer = (state: State, action: AppActions) => {
  switch (action.type) {
    case TodoActionType.VIEW_DETAILS:
      const todo = state.pageTodoFilter.find((todo) => (todo.id === action.id));

      return todo? {...todo}: {...defaultValue};
    default:
      return {...defaultValue};
  }
};

export default detailsReducer;