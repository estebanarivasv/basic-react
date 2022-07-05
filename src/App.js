import { useState } from "react";
import { AddTask } from "./component/AddTask";
import { Header } from "./component/Header";
import { TasksList } from "./component/TasksList";

function App() {

  const [showAddTaskComponent, setShowAddTaskComponent] = useState(false)
  // We define the data inside the component
  const [tasksFromJson, setItems] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 5th at 1:30 pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30 pm',
        reminder: false
      }]
  );

  const deleteTask = (id) => {
    console.log("Deleting ", id)
    setItems(tasksFromJson.filter((task) => task.id !== id))
  }

  return (
    // setItems([...]) -- we can use it to redifine the 
    // Only one parent element
    <div className="App container">
      <Header onAdd={() => setShowAddTaskComponent(!showAddTaskComponent)} />
      {showAddTaskComponent && <AddTask />}
      {tasksFromJson.length > 0 ?
        (<TasksList items={tasksFromJson} onDelete={deleteTask} />) :
        (<p>Nothing left to do</p>)
      }

    </div>
  );
}

export default App;
