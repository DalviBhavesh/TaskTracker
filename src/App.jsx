
import './App.css'
import Nav from './components/Nav'
import Card from './components/Card'
import TextField from './components/TextField'
import { TodoProvider } from './context'
import { useEffect, useState } from 'react'

function App() {

  const [todos,setTodos] = useState([]);

  const addTodo = (todo)=>{
    // we get access of the previous values in the set function 
    // ... is spread operator 
    if(todo.todo != "" ){
      setTodos((prev)=> [{id: Date.now(), ...todo}, ...prev]);
    }
    
  }

  const updateTodo = (id,todo)=>{
    //when we use curly bracket we need to return the value 
    //or dont use curly bracket use ( ) round brackets 

    setTodos((prev)=>{return (prev.map((prevTodo)=>(prevTodo.id === id) ? todo : prevTodo))});
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((todo)=> todo.id != id))
  }

  const toggleComplete = (id)=>{
    setTodos((prev)=>(prev.map((prevTodo)=>(prevTodo.id == id ? {...prevTodo, completed: !(prevTodo.completed)}: prevTodo ))))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos")); 

    if(todos && todos.length > 0){
      setTodos(todos);
    }

  }, [])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <Nav />
      <div className='bg-lime-400 w-lvw h-lvh flex flex-col items-center justify-center'>
        
        <div className=' w-full h-1/3 p-4 pb-5 flex flex-wrap flex-col justify-end items-center '>
          
          <div className= "flex flex-row item-center justify-center">
            <h1 className='pt-2 text-xl font-bold'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
            </h1>
            <h1 className='p-2 text-xl font-bold'>ENTER YOUR TASK</h1>
          </div>
          

          <TextField />
        </div>

        <div className= ' bg-white w-full h-2/3 flex flex-wrap flex-row justify-center items-center overflow-scroll overflow-x-hidden scroll-'>


        

          {todos.length > 0 ? todos.map((todo)=>(<div key={todo.id}><Card todo = {todo}/></div>)):<div className='font-bold text-xl'> <img className='w-96' src="https://img.freepik.com/free-vector/multitasking-concept-illustration_114360-3220.jpg?t=st=1712950766~exp=1712954366~hmac=0a285269d4df1eba980f2bc13f4f37e4d08191fb09735b3179854abf94fcd307&w=740" alt="NO TASKS TO SHOW !" /> </div>}
         
          
          {/*<Card todo = {{id: 1, todo: "go to gym!", completed:false}} />
          <Card todo = {{id: 1, todo: "go to gym!", completed:false}} />
          <Card todo = {{id: 1, todo: "go to gym!", completed:false}} />
          <Card todo = {{id: 1, todo: "go to gym!", completed:false}} />
          <Card todo = {{id: 1, todo: "go to gym!", completed:false}} />
          <Card todo = {{id: 1, todo: "go to gym!", completed:false}} />
          <Card todo = {{id: 1, todo: "go to gym!", completed:false}} />
          <Card todo = {{id: 1, todo: "go to gym!", completed:false}} /> */}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
