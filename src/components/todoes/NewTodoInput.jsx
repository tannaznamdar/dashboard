import UseFormInput from "../../hooks/UseFormInput"

export default function NewTodoInput() {

    const newTodo = UseFormInput ('')

    const addTodoHandler = (event) =>{
        if (event.key === 'Enter' && event.target.value != ''){
            console.log (event.target.value)
            event.target.value = ''
        }
    }

    return (

        <div className="relative">
            <input type="text" placeholder="What needs to be done today?"
                className="w-full px-2 py-3 border rounded outline-none border-grey-600"
                {...newTodo}
                onKeyDown={addTodoHandler}
                />
        </div>

    )
}