import DeleteIcon from "./../icons/DeleteIcon";
import EditIcon from "./../icons/EditIcon";

export default function ToDoListItem({todo}) {
  return (
    <li className="relative flex items-center justify-between px-2 py-6 border-b">
      <div>
        <input type="checkbox" checked={todo?.status ? true : false} onChange={()=>console.log('cheked')} />
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
        className="absolute right-0 flex items-center space-x-4">
        <DeleteIcon />
        <EditIcon />
      </div>
    </li>
  );
}
