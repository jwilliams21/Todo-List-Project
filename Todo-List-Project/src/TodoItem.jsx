export function TodoItem( { completed, id, title, description, completedate, urgency, toggleTodo, deleteTodo } ) {
    return (
        <>
            <div>
                {title}
            </div>
            <div>
                {description}
            </div>
            <div>
                {completedate}
            </div>
            <div>
                {urgency}
            </div>
        </>
    )
}