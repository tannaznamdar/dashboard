import { useEffect, useReducer } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import NewTodoInput from "./NewTodoInput";
import ToDoList from "./ToDoList";
import TodosReducer from "../../reducers/TodosReducer";

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

  const addTodoHandler = async (newTodoValue) => {
    try {
      const res = await axios.post(
        "https://675bf8c89ce247eb19380ed6.mockapi.io/todoes-new",
        newTodoValue
      );

      todoDispatcher({
        type: "add",
        id: res.data.id,
        title: newTodoValue.title,
      });

      toast.success("todo created :)");
    } catch (error) {
      console.error("Error saving todo:", error);
      toast.error(error.message || "an error occurred");
    }
  };

  const deleteTodoHandler = async (todo) => {
    try {
      const res = await axios.delete(
        `https://675bf8c89ce247eb19380ed6.mockapi.io/todoes-new/${todo.id}`
      );

      todoDispatcher({
        type: "delete",
        id: res.data.id
      })
      toast.success("todo deleted :)");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "an error occurred");
    }
  };

  const toggleTodoStatusHandler = async (todo) => {
    try {
      let res = await axios.put(
        `https://675bf8c89ce247eb19380ed6.mockapi.io/todoes-new/${todo.id}`,
        { status: !todo.status }
      );

      todoDispatcher({
        type: "toggle-status",
        id: res.data.id,
      })
    } catch (error) {
      console.error(error);
      toast.error(error.message || "an error occurred");
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

      // setToDoes(newTodoes);
      toast.success("todo edited :)");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "an error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-full px-4 py-8 mx-auto shadow lg:w-2/3  max-h-screen overflow-auto bg-white">
        <div className="flex items-center mb-6">
          <h1 className="mr-6 text-4xl font-bold text-purple-600">TO DO APP</h1>
        </div>

        <NewTodoInput addTodo={addTodoHandler} />
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
