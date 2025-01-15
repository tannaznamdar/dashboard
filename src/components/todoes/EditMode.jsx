export default function EditMode({todo}) {
  return (
    <div className="relative w-full mr-4">
      <input
        type="text"
        defaultValue={todo.title}
        className="w-full px-2 py-3 border rounded outline-none border-grey-600"
      />
    </div>
  );
}
