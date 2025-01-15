import NewTodoInput from "./NewTodoInput";

export default function ToDoes(){
    return(

        <div className="flex items-center justify-center py-16">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-2/3  max-h-screen overflow-auto bg-white">

                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP </h1>
                </div>
                
                <NewTodoInput />
            </div>
        </div>
    )
}