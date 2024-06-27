import React from 'react'
import "./styles.css"
import { useState } from 'react'

export function AddNewToDoItem(props) {
    const [newItem, setNewItem] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newCompleteDate, setNewCompleteDate] = useState("")
    const [newUrgency, setNewUrgency] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        if (newDescription === "") return
        if (newCompleteDate === "") return
        if (newUrgency === "") return

        props.onSubmit(newItem)
        props.onSubmit(newDescription)
        props.onSubmit(newCompleteDate)
        props.onSubmit(newUrgency)

        setNewItem("")
        setNewDescription("")
        setNewCompleteDate("")
        setNewUrgency("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input 
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text" 
                    id="title" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input 
                    value={newDescription}
                    onChange={e => setNewDescription(e.target.value)}
                    type="text" id="description" />
                </div>
                <div>
                    <label htmlFor="completedate">Complete By</label>
                    <input 
                    value={newCompleteDate}
                    onChange={e => setNewCompleteDate(e.target.value)}
                    type="date" id="completedate" />
                </div>
                <div>
                    <label htmlFor="urgency">Urgency</label>
                    <select 
                    value={newUrgency}
                    onChange={e => setNewUrgency(e.target.value)}
                    id="urgency">
                        <option value="null">Choose One...</option>
                        <option value="Urgent and Important">Urgent and Important</option>
                        <option value="Urgent and Not Important">Urgent and Not Important</option>
                        <option value="Important but Not Urgent">Important but Not Urgent</option>
                        <option value="Not Urgent and Not Important">Not Urgent and Not Important</option>
                    </select>
                </div>
                <button>Add</button>
            </form>
        </>
    )
}