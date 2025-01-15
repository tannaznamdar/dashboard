import ToDoListItem from "./ToDoListItem";

export default function ToDoList({ toDoes, deleteTodo, toggleStatus, editTodo }) {
  return (
    <ul>
      {toDoes.map((todo) => (
        <ToDoListItem key={todo.id} todo={todo} editTodo={editTodo} toggleStatus={toggleStatus} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}
