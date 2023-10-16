import { uid } from 'uid';

import { TodoType } from "../types/State";
import { TodoActionType} from "../types/actions/TodoAction";
import { AppActions } from "../types/actions";

const todoReducer = (todoList: TodoType[], action: AppActions) => {

  switch (action.type) {
    case TodoActionType.ADD_TODO:
      const { title, description } = action;

      return [ ...todoList,
        { uid: uid(), title, description, completed: false },
      ];

    case TodoActionType.REMOVE_TODO:
      return todoList.filter(todo => todo.id !== action.id);

    case TodoActionType.TOGGLE_TODO:
      
      return todoList.map( todo => 
        todo.id === action.id
        ? { ...todo, completed: !todo.completed}
        : todo);
    default:
      return todoList;
  }
};

export default todoReducer;
