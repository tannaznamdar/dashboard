import UseFormInput from "../../hooks/UseFormInput";
import axios from "axios";
import { toast } from "react-toastify";


export default function NewTodoInput({todoDispatcher}) {
  const newTodo = UseFormInput("");

  const addTodoHandler = async (event) => {
    if (event.key === "Enter" && event.target.value != "") {
      let newTodoValue = { title: event.target.value, status: false };
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

      newTodo.reset();
      toast.success("todo created :)");
    } catch (error) {
      console.error("Error saving todo:", error);
      toast.error(error.message || "an error occurred");
    }
  }
}

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="What needs to be done today?"
        className="w-full px-2 py-3 border rounded outline-none border-grey-600"
        value={newTodo.value}
        onChange={newTodo.onChange}
        onKeyDown={addTodoHandler}
      />
    </div>
  );
}
