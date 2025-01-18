import { useEffect, useReducer } from "react";
import axios from "axios";
import { todoContext } from "../../context/TodoContext";
import TodosReducer from "../../reducers/TodosReducer";

import { toast } from "react-toastify";

import NewTodoInput from "./NewTodoInput";
import ToDoList from "./ToDoList";



export default function ToDoes() {

  const [toDoes, todoDispatcher] = useReducer(TodosReducer, []);

  const getTodoes = async () => {
    try {
      const res = await axios.get(
        "https://675bf8c89ce247eb19380ed6.mockapi.io/todoes-new"
      );

      todoDispatcher({
        type: "initial-toDoes",
        toDoes: res.data,
      });
    } catch (error) {
      console.error("Error fetching todos:", error);
      toast.error(error.message || "an error occurred");
    }
  };

  useEffect(() => {
    getTodoes();
  }, []);

  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-full px-4 py-8 mx-auto shadow lg:w-2/3  max-h-screen overflow-auto bg-white">
        <div className="flex items-center mb-6">
          <h1 className="mr-6 text-4xl font-bold text-purple-600">TO DO APP</h1>
        </div>

        <NewTodoInput todoDispatcher={todoDispatcher} />

        <todoContext.Provider value={{toDoes,todoDispatcher}}>
          <ToDoList />
        </todoContext.Provider>

      </div>
    </div>
  );
}
