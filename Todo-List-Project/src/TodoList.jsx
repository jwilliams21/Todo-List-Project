import { TodoTableHeader } from './TodoTableHeader';
import { TodoItem } from './TodoItem'

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
    {todos.length === 0 && <h4 className="notodo">No Todos!  Congrats on getting all your todos completed!</h4>}
    <div className="todo-list">
      <table>
        <tbody>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </tbody>
      </table>
    </div>
  </ul>
  );
}