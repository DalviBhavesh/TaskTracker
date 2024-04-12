import React, { useState } from 'react';
import { useTodo } from '../context';

function TextField(){

    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();

    const add = (e)=> {
        e.preventDefault();
        
        addTodo({todo: todo, completed:false})
        setTodo("");
    }



    return (
        <>
            <form onSubmit={add} className="flex  flex-wrap justify-center w-full items-center space-x-2 md:w-1/3">
            <input
                className="flex h-10 w-full bg-white  rounded-md border border-white shadow-md bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="eg. Do the remaining homework......."
                value = {todo}
                onChange={(e)=>{setTodo(e.target.value)}}
            ></input>
            <button
                type="submit"
                className="rounded-md w-32 bg-black mt-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                ADD TASK
            </button>
            </form>
        </>
       
      )
}

export default TextField;