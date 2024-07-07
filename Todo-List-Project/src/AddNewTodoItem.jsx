import React from 'react';
import "./styles.css";
import { useState } from 'react';

export function AddNewToDoItem(props) {
    const [newItem, setNewItem] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newUrgency, setNewUrgency] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        
        props.onSubmit(newItem, newDescription, selectedDate, newUrgency)

        setNewItem("")
        setNewDescription("")
        setNewUrgency("")
        setSelectedDate("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="label">
                    <label className="label">Complete By</label>
                </div>
                <div>
                    <input 
                    type="date"
                    value={selectedDate} 
                    onChange={e => setSelectedDate(e.target.value)}/>
                </div>
                <div className="label">
                    <label htmlFor="urgency" className="label">Urgency</label>
                </div>
                <div>    
                    <select 
                    value={newUrgency}
                    onChange={e => setNewUrgency(e.target.value)}
                    id="urgency">
                        <option value="null">Choose One...</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="label">
                    <label htmlFor="title" className="label">Title</label>
                </div>    
                <div>
                    <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text" 
                    id="title" />
                </div>
                <div className="label">
                    <label htmlFor="description">Description</label>
                </div>
                <div>    
                    <textarea 
                    value={newDescription}
                    onChange={e => setNewDescription(e.target.value)}
                    type="text" id="description" />
                </div>
                <button className="addbutton">Add</button>
            </form>
        </>
    )
}