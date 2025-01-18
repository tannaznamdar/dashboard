import { useContext, useRef, useState, useEffect } from "react";
import axios from "axios";
import { todoContext } from "../../context/TodoContext";
import propTypes from 'prop-types'

import { toast } from "react-toastify";
import { XMarkIcon } from "@heroicons/react/24/outline";

import DeleteIcon from "./../icons/DeleteIcon";
import EditIcon from "./../icons/EditIcon";
import EditMode from "./EditMode";


function ToDoListItem({ todo }) {

  const [editMode, setEditMode] = useState(false);
  const {todoDispatcher} = useContext (todoContext)

  const deleteTodoHandler = async (todo) => {
    try {
      const res = await axios.delete(
        `https://675bf8c89ce247eb19380ed6.mockapi.io/todoes-new/${todo.id}`
      );

      todoDispatcher({
        type: "delete",
        id: res.data.id,
      });
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
      });
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

      todoDispatcher({
        type: "edit-title",
        id: res.data.id,
        newTitle: newTodoTitle,
      });
      toast.success("todo edited :)");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "an error occurred");
    }
  };

  const editRef = useRef(null)

  useEffect(() => {
    if (editMode) {
      editRef.current.focus();
    }
  }, [editMode]);

  const clickEditIconHandler = ()=>{
    setEditMode(true)
  }

  return (
    <>
      <li className="relative flex items-center justify-between px-2 py-6 border-b">

        {editMode 
        ? (
            <div className="flex justify-between items-center w-full">
              <EditMode todo={todo} editTodo={editTodoHandler} setEditMode={setEditMode} editRef={editRef} />
              <XMarkIcon className="size-5 text-red-800"
              onClick={()=>setEditMode(false)} />
            </div>
          )
        
        : (
            <div className="flex items-center">
              <div>
                <input
                  type="checkbox"
                  checked={todo?.status ? true : false}
                  onChange={() => toggleTodoStatusHandler(todo)}
                />
                <p
                  className={`inline-block mt-1 ml-2 cursor-pointer  ${
                    todo?.status ? "line-through text-gray-400" : "text-gray-700"
                  }`}
                >
                  {todo?.title}
                </p>
              </div>
  
              <div
                type="button"
                className="absolute right-0 flex items-center space-x-4"
              >
                <DeleteIcon onClick={() => deleteTodoHandler(todo)} />
                <EditIcon onClick={clickEditIconHandler} />
              </div>
            </div>
          ) 
        }
      </li>
    </>
  );
}

ToDoListItem.propTypes ={
  todo: propTypes.object
}

export default ToDoListItem;
