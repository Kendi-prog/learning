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
import Quiz from "./components/quiz.component";
import CardParent2 from "./componentss2/card.component";
import Form from "./componentss2/form.component";
import Art from "./componentss2/art";
import Counter from "./componentss2/counter.component";
import Mood from "./componentss2/mood.component";
import Mood2 from "./componentss2/mood2.component";
import Toolbar from "./react-dev/passing-event-handlers";
import LightSwitch from "./react-dev/light-switch";

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
      <Avatar /> 
      <CardParent />
      <TaskList tasks={tasks}/>
      <UsersList />
      <SoftwareDeveloperList />
      <Quiz />
      <CardParent2 name="Joy Leila" age={20} isPremium={true} />
      <Form />
      <Art /> */}
      {/* <Counter /> */}
      {/* <Mood />
      <Mood2 /> */}
      <Toolbar />
      <LightSwitch />
    </div> 
  );
}

export default App
