import React from 'react'

export function TodoTableHeader() {
return (
  <div className="table-header">
    <div className="header-cell">Completed</div>
    <div className="header-cell">Date Added</div>
    <div className="header-cell">Complete By</div>
    <div className="header-cell">Title</div>
    <div className="header-cell">Description</div>
    <div className="header-cell">Urgency</div>
  </div>
    )
}