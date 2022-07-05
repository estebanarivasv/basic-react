import { Task } from "./Task";

export const TasksList = ({ items, onDelete }) => {

    return (
        <>
            {items.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete}/>
            ))}
        </>
    );
}
