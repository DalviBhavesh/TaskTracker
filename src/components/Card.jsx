import React from 'react';
import { ArrowUpRight } from 'lucide-react'
import { useTodo } from '../context';
import { useState } from 'react';


function Card({todo}){

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);

    const {updateTodo, deleteTodo, toggleComplete} = useTodo();
    
    const editTodo = ()=>{
        updateTodo(todo.id, {...todo, todo: todoMsg });
        setIsTodoEditable(false);
    }

    const toggle = ()=>{
        toggleComplete(todo.id);
    }

    const remove = ()=>{
        deleteTodo(todo.id);
    }

    return (
        <>
            <div className="w-[300px] rounded-md border shadow-lg m-5 bg-white">
            
            <div className="p-4">
                <button 
                    className={`inline-flex  shadow-md ${todo.completed ? "bg-lime-400 hover:bg-lime-500 w-56" : "bg-red-400 hover:bg-red-500 w-48"}  p-2 rounded-md items-center justify-evenly text-lg font-semibold`}
                    onClick={toggle}
                    >
                {todo.completed ? "TASK COMPLETED":"TASK PENDING"} 
                {todo.completed ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>) }
                </button>
                <textarea 
                    type='text' 
                    className={`inline p-2 mt-3 w-64  text-3xl text-black font-bold ${ todo.completed ? "line-through": ""} `}
                    value={todoMsg} 
                    onChange={(e)=>{setTodoMsg(e.target.value)}}
                    onClick={()=>{setIsTodoEditable(true)}}
                    readOnly={!isTodoEditable}
                    >
                </textarea>
                    
                    
                
                
                <button
                type="button"
                className="disabled:bg-gray-400 disabled:text-gray-700 disabled:border-gray-400 mt-4  w-32 rounded-md bg-red-400 px-2 py-2 text-sm font-semibold text-black border border-red-400  shadow-md hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={editTodo}
                disabled={!isTodoEditable}
                >
                Update
                </button>

                <button
                type="button"
                className="disabled:bg-gray-400 disabled:text-gray-700 disabled:border-gray-400  mt-4 m-1 w-32 rounded-md bg-black px-2 py-2 text-sm font-semibold text-white border border-black  shadow-md hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={remove}
                disabled={!todo.completed}
                >
                Delete
                </button>
            </div>
            </div>
        </>
      )
}

export default Card;