import React, { useState } from 'react'

export function TodoItem( { completed, id, title, description, completedate, urgency, toggleTodo, deleteTodo } ) {
    const [currentDate, setCurrentDate] = useState(new Date())

    return (
    <table>  
    <thead>
        <tr>
            <th></th>
            <th>Completed?</th>
            <th>Date Added</th>
            <th>Complete By</th>
            <th>Title</th>
            <th>Description</th>
            <th>Urgency</th>
        </tr>
    </thead>
    <tbody> 
    <tr key={id}>
      <td>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
      </td>
      <td>
        <label>
          <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
        </label>
      </td>
      <td>{currentDate.toLocaleDateString()}</td>
      <td>{completedate}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{urgency}</td>
    </tr>
    </tbody> 
    </table>
    )
}
