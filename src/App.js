import { useState } from "react";
import { Header } from "./component/Header";
import { TasksList } from "./component/TasksList";

function App() {

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


  return (
    // setItems([...]) -- we can use it to redifine the 
    // Only one parent element
    <div className="App">
      <Header />
      <TasksList items={tasksFromJson} />
    </div>
  );
}

export default App;
