import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AddNewToDoItem } from './AddNewTodoItem';
import { TodoList } from './TodoList';
import "./styles.css";


export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title, description, selectedDate, urgency) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, description, selectedDate, urgency, completed: false}
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }

        return todo
      }
      )
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <body>
      <div className="app-container">
        <AddNewToDoItem onSubmit={addTodo}/>
        <h1 className="todolist">To-do List</h1> 
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </div>
    </body>
  )
}

