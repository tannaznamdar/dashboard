import { TrashIcon } from "@heroicons/react/24/outline";

export default function DeleteIcon({onClick: deleteHandler}) {

    return (

        <TrashIcon onClick={deleteHandler} className="size-5 text-red-900 cursor-pointer" />

    )
}