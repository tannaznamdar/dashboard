import { useState } from "react";
import NewTodoInput from "./NewTodoInput";
import ToDoList from "./ToDoList";

export default function ToDoes(){

    const [toDoes, setToDoes] = useState ([
        {id:1 , title: 'go to school', status : false},
        {id:2 , title: 'go to game', status : true}
    ]) 
    
    return(

        <div className="flex items-center justify-center py-16">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-2/3  max-h-screen overflow-auto bg-white">

                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP </h1>
                </div>

                <NewTodoInput />
                <ToDoList toDoes={toDoes} />
            </div>
        </div>
    )
}