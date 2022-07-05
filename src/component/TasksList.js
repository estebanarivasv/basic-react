import { Task } from "./Task";

export const TasksList = ({ items }) => {

    return (
        <>
            {items.map((task, index) => (
                <Task key={index} task={task}/>
            ))}
        </>
    );
}
