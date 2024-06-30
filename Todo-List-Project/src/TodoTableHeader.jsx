import React from 'react'

export function TodoTableHeader({todos}) {
return (
    <>
        <table>
        <thead>
          <tr>
              <th></th>
              <th>Completed</th>
              <th>Date Added</th>
              <th>Complete Date</th>
              <th>Title</th>
              <th>Description</th>
              <th>Urgency</th>
          </tr>
        </thead>
      </table> 
    </>
    )
}