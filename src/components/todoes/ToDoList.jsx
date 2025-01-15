import ToDoListItem from "./ToDoListItem";

export default function ToDoList({ toDoes, deleteTodo }) {
  return (
    <ul>
      {toDoes.map((todo) => (
        <ToDoListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}
