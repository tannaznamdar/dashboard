import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import DeleteIcon from "./../icons/DeleteIcon";
import EditIcon from "./../icons/EditIcon";
import EditMode from "./EditMode";

export default function ToDoListItem({ todo, deleteTodo, toggleStatus, editTodo }) {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <li className="relative flex items-center justify-between px-2 py-6 border-b">

        {editMode 
        ? (
            <div className="flex justify-between items-center w-full">
              <EditMode todo={todo} editTodo={editTodo} setEditMode={setEditMode} />
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
                  onChange={() => toggleStatus(todo)}
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
                <DeleteIcon onClick={() => deleteTodo(todo)} />
                <EditIcon onClick={()=> setEditMode(true)} />
              </div>
            </div>
          ) 
        }
      </li>
    </>
  );
}
