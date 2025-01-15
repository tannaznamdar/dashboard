
export default function EditMode({ todo, editTodo, setEditMode }) {

  const saveNewTodo = (event) => {
    if (event.key === "Enter" && event.target.value != "") {
      let newTodoTitle = event.target.value
      editTodo(newTodoTitle, todo)
      setEditMode(false)
    }
  };

  return (
    <div className="relative w-full mr-4">
      <input
        type="text"
        defaultValue={todo.title}
        onKeyDown={saveNewTodo}
        className="w-full px-2 py-3 border rounded outline-none border-grey-600"
      />
    </div>
  );
}
