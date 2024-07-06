import React from 'react';
import "./styles.css";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function AddNewToDoItem(props) {
    const [newItem, setNewItem] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newUrgency, setNewUrgency] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);

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
                    value={selectedDate} />
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
                        <option value="Urgent and Important">Urgent and Important</option>
                        <option value="Urgent and Not Important">Urgent and Not Important</option>
                        <option value="Important but Not Urgent">Important but Not Urgent</option>
                        <option value="Not Urgent and Not Important">Not Urgent and Not Important</option>
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