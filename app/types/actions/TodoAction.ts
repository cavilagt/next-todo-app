
export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  VIEW_DETAILS = "VIEW_DETAILS"
}

export type AddTodo = {
  type: TodoActionType.ADD_TODO;
  title: string;
  description: string;
};

export type RemoveTodo = {
  type: TodoActionType.REMOVE_TODO;
  id: string;
};

export type ToggleTodo = {
  type: TodoActionType.TOGGLE_TODO;
  id: string;
};

export type ViewDetails = {
  type: TodoActionType.VIEW_DETAILS;
  id: string;
};

export type TodoAction = AddTodo | RemoveTodo | ToggleTodo | ViewDetails;
