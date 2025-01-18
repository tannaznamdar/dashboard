import { useContext } from "react";
import { todoContext } from "../../context/TodoContext";

import ToDoListItem from "./ToDoListItem";


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
