import { useState } from "react";
import Button from "./components/button.component";
import Button2 from "./components/button2.component";
import Gallery from "./components/gallery";
import Person from "./components/person";
import Avatar from "./components/avatar.component";
import CardParent from "./components/cardParent.component";
import TaskList from "./components/taskList.component";
import UsersList from "./components/users.component";
import SoftwareDeveloperList from "./components/users2.component";



function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  const tasks = [
    {id:1, name: "Task1", completed: false},
    {id:2, name: "Task2", completed: false},
    {id:3, name: "Task3", completed: true}
  ]

  return (
    <div>
      {/* <Gallery />
      <Button />
      <Button />
      <Button2 handleClick={handleClick} count={count}/>
      <Button2 handleClick={handleClick} count={count}/>
      <Person />
      <Avatar /> */}
      {/* <CardParent /> */}
      {/* <TaskList tasks={tasks}/> */}
      {/* <UsersList /> */}
      <SoftwareDeveloperList />

    </div> 
  );
}

export default App
