import { useState } from 'react';
import { TodoTableHeader } from './TodoTableHeader';
import { TodoItem } from './TodoItem';


export function TodoList({ todos, toggleTodo, deleteTodo }) {
  const [hasRenderedHeader, setHasRenderedHeader] = useState(false);

  return (
    <div className="table-container">
      {todos.length === 0 && <h4 className="notodo">No Todos!  Congrats on getting all your todos completed!</h4>}
      {todos.length > 0 && !hasRenderedHeader && (
        <TodoTableHeader 
        onHeaderRender={() => setHasRenderedHeader(true)} />
      )}

      <br/>
      <br/>

      {todos.map((todo) => (
        <TodoItem 
        key={todo.id} 
        {...todo} 
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}/>
      ))}
    </div>
  );
}