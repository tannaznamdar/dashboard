import UseFormInput from "../../hooks/UseFormInput";

export default function NewTodoInput({ addTodo }) {
  const newTodo = UseFormInput("");

  const addNewTodo = (event) => {
    if (event.key === "Enter" && event.target.value != "") {
      let newTodoValue = { title: event.target.value, status: false };
      addTodo(newTodoValue);
      newTodo.reset();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="What needs to be done today?"
        className="w-full px-2 py-3 border rounded outline-none border-grey-600"
        value={newTodo.value}
        onChange={newTodo.onChange}
        onKeyDown={addNewTodo}
      />
    </div>
  );
}
