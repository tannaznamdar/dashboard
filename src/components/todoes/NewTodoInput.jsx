import UseFormInput from "../../hooks/UseFormInput"
import { v4 as uuidv4 } from 'uuid';

export default function NewTodoInput({toDoes,setToDoes}) {

    const newTodo = UseFormInput ('')

    const addTodoHandler = (event) =>{
        if (event.key === 'Enter' && event.target.value != ''){

            let newTodoValue = {id:uuidv4(), title:event.target.value, status:false }

            setToDoes([
                ...toDoes,
                newTodoValue
            ]);

            newTodo.reset();
        }
    }

    return (

        <div className="relative">
            <input type="text" placeholder="What needs to be done today?"
                className="w-full px-2 py-3 border rounded outline-none border-grey-600"
                value={newTodo.value}
                onChange={newTodo.onChange}
                onKeyDown={addTodoHandler}
                />
        </div>

    )
}