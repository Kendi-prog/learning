import { useState } from "react";
import Button from "./components/button.component";
import Button2 from "./components/button2.component";
import Gallery from "./components/gallery";
import Person from "./components/person";
import Avatar from "./components/avatar.component";
import CardParent from "./components/cardParent.component";



function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      {/* <Gallery />
      <Button />
      <Button />
      <Button2 handleClick={handleClick} count={count}/>
      <Button2 handleClick={handleClick} count={count}/>
      <Person />
      <Avatar /> */}
      <CardParent />

    </div> 
  );
}

export default App
