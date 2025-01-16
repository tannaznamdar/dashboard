import { useState } from "react";
import NewTodoInput from "./NewTodoInput";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";

export default function ToDoes() {
  const [toDoes, setToDoes] = useState([]);

  const deleteTodoHandler = (todo) => {
    let newTodoes = toDoes.filter((item) => {
      return todo.id != item.id;
    });
    setToDoes(newTodoes);
  };

  const toggleTodoStatusHandler = (todo) => {
    let newTodoes = toDoes.map((item) => {
      if (item.id === todo.id) {
        item.status = !item.status;
      }
      return item;
    });
    setToDoes(newTodoes);
  };

  const editTodoHandler = (newTodoTitle, todo) => {
    let newTodoes = toDoes.map((item) => {
      if (item.id === todo.id) {
        todo.title = newTodoTitle;
      }
      return item;
    });
    setToDoes(newTodoes);
  };

  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-full px-4 py-8 mx-auto shadow lg:w-2/3  max-h-screen overflow-auto bg-white">
        <div className="flex items-center mb-6">
          <h1 className="mr-6 text-4xl font-bold text-purple-600">
            TO DO APP
          </h1>
        </div>

        <NewTodoInput toDoes={toDoes} setToDoes={setToDoes} />
        <ToDoList
          toDoes={toDoes}
          editTodo={editTodoHandler}
          deleteTodo={deleteTodoHandler}
          toggleStatus={toggleTodoStatusHandler}
        />
      </div>
    </div>
  );
}
