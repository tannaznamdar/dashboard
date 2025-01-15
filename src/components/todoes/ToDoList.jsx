import ToDoListItem from "./ToDoListItem";

export default function ToDoList({ toDoes }) {
  return (
    <ul>
      {toDoes.map((todo) => (
        <ToDoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
