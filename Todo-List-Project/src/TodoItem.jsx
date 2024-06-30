import React, { useState } from 'react'
import { TodoTableHeader } from './TodoTableHeader'

export function TodoItem( { completed, id, title, description, completedate, urgency, toggleTodo, deleteTodo } ) {
    const [currentDate, setCurrentDate] = useState(new Date())

    return (
        <>
        <table>
          <TodoTableHeader />
          <tbody>
            <tr key={id}>
              <td>
                <button onClick={() => deleteTodo(id)} className="deletebutton">Delete</button>
              </td>
              <td className="checkbox">
                <label>
                  <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                </label>
              </td>
              <td>{currentDate.toLocaleDateString()}</td>
              <td>{completedate || ''}</td>
              <td>{title || ''}</td>
              <td>{description || ''}</td>
              <td>{urgency || ''}</td>
            </tr>
          </tbody>
        </table>
      </>
    )
}
