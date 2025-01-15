import ToDoListItem from "./ToDoListItem";

export default function ToDoList({ toDoes, deleteTodo, toggleStatus }) {
  return (
    <ul>
      {toDoes.map((todo) => (
        <ToDoListItem key={todo.id} todo={todo} toggleStatus={toggleStatus} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}
