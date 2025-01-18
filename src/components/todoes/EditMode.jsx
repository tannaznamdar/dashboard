import propTypes from 'prop-types'

function EditMode({ todo, editTodo, setEditMode, editRef }) {

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
      ref={editRef}
        type="text"
        defaultValue={todo.title}
        onKeyDown={saveNewTodo}
        className="w-full px-2 py-3 border rounded outline-none  focus:border focus:border-gray-400"
      />
    </div>
  );
}

EditMode.propTypes ={
  todo:propTypes.object,
  editTodo:propTypes.func,
  setEditMode: propTypes.func
}

export default  EditMode;
