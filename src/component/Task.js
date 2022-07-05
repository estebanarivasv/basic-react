import { FaTimes } from "react-icons/fa"

export const Task = ({ task, onDelete }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3>{task.text}
            <FaTimes onClick={() => onDelete(task.id)}/> </h3>
            <p>{task.day}</p>
        </div>
    )
}
