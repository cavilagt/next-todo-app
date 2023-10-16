export type TodoType = {
  id: string,
  title: string,
  description: string,
  completed: boolean,
}

export type NewTodo = {
  title: string,
  description: string,
}

export type State = {
  todoList: TodoType[],
  pageTodoFilter: TodoType[],
  todo?: TodoType
}