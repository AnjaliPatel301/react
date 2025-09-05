import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './useContext/Todoprovider'
import Todoform from './component/Todoform'
import Todoitems from './component/Todoitems'

function App() {
  const [todos, settodo] = useState([])

  const addtodo = (todo) => {
    settodo((prev) => [{ id: Date.now(), ...todo }, ...prev]
    )
  }

  const updatatodo = (id, todo) => {
    settodo((prev) => {
      return prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo
      )
    })
  }

  const deletetodo = (id) => {
    settodo((prev) => {
      return prev.filter((todo) => todo.id !== id)
    })
  }

  const togelCheck = (id) => {
    settodo((prev) => {
      return prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, complete: !prevTodo.complete }
          : prevTodo
      )
    })
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      settodo(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addtodo, updatatodo, deletetodo, togelCheck }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <Todoform/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <Todoitems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
