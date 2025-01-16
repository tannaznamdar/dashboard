import { useEffect, useState } from "react";
import axios from "axios";
import NewTodoInput from "./NewTodoInput";
import ToDoList from "./ToDoList";

export default function ToDoes() {
  const [toDoes, setToDoes] = useState([]);

  const getTodoes = async () => {
    try {
      const res = await axios.get(
        "https://675bf8c89ce247eb19380ed6.mockapi.io/todoes-new"
      );
      setToDoes(res.data);
      
    } catch (error) {
      console.error("Error fetching todos:", error);
      alert("مشکلی در ذخیره‌سازی تسک به وجود آمد.");
    }
  };

  useEffect(() => {
    getTodoes();
  }, []);

  const deleteTodoHandler = async (todo) => {
    try {
      const res = await axios.delete(
        `https://675bf8c89ce247eb19380ed6.mockapi.io/todoes-new/${todo.id}`
      );
      let newTodoes = toDoes.filter((item) => {
        return todo.id != item.id;
      });

      setToDoes(newTodoes);

    } catch (error) {
      console.error(error);
      alert("مشکلی در ذخیره‌سازی تسک به وجود آمد.");
    }
  };

  const toggleTodoStatusHandler = async (todo) => {
    try {
      let res = await axios.put(
        `https://675bf8c89ce247eb19380ed6.mockapi.io/todoes-new/${todo.id}`,
        { status: !todo.status }
      );

      let newTodoes = toDoes.map((item) => {
        if (item.id === todo.id) {
          item.status = !item.status;
        }
        return item;
      });

      setToDoes(newTodoes);

    } catch (error) {
      console.error(error);
      alert("مشکلی در ذخیره‌سازی تسک به وجود آمد.");
    }
  };

  const editTodoHandler = async (newTodoTitle, todo) => {
    try {
      let res = await axios.put(
        `https://675bf8c89ce247eb19380ed6.mockapi.io/todoes-new/${todo.id}`,
        { title: newTodoTitle }
      );

      let newTodoes = toDoes.map((item) => {
        if (item.id === todo.id) {
          todo.title = newTodoTitle;
        }
        return item;
      });

      setToDoes(newTodoes);

    } catch (error) {
      console.error(error);
      alert("مشکلی در ذخیره‌سازی تسک به وجود آمد.");
    }
  };

  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-full px-4 py-8 mx-auto shadow lg:w-2/3  max-h-screen overflow-auto bg-white">
        <div className="flex items-center mb-6">
          <h1 className="mr-6 text-4xl font-bold text-purple-600">TO DO APP</h1>
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
