import { TodoItem } from './TodoItem'

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul>
            {todos.length === 0 && "No Todos!  Great work on completing all your tasks!"}
            {todos.map(todo => {
                return (
                    <TodoItem 
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />    
                )
            })}
        </ul>
    )
}