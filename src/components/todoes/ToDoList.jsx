import { useContext } from "react";
import ToDoListItem from "./ToDoListItem";
import { todoContext } from "../../context/TodoContext";

export default function ToDoList() {
  const {toDoes} = useContext(todoContext)
  return (
    <ul>
      {toDoes.map((todo) => (
        <ToDoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
