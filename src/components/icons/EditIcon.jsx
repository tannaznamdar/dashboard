import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function EditIcon({onClick:EditHandler}) {

    return (

        <PencilSquareIcon onClick={EditHandler} className="size-5 text-blue-900 cursor-pointer" />
        
    )
}