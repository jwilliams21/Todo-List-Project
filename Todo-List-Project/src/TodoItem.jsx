import React, { useState } from 'react'

export function TodoItem( { completed, id, title, description, selectedDate, urgency, toggleTodo, deleteTodo } ) {
    const [currentDate, setCurrentDate] = useState(new Date())

    return (
      <div key={id} className="table-body">
        <div key={id} className="table-row">
        <div className="cell">
                <label>
                  <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                </label>
        </div>
        <div className="cell">
          {currentDate.toLocaleDateString()}
        </div>
        <div className="cell">
          {selectedDate || ''}
        </div>
        <div className="cell">
          {title || ''}
        </div>
        <div className="cell">
          {description || ''}
        </div>
        <div className="cell">
          {urgency || ''}
        </div>
        <div className="cell">
          <button onClick={() => deleteTodo(id)} className="deletebutton">Delete</button>
        </div>
        </div>
      </div>
    )
}
