import TodoName from "./compoment/TodoName";
import Todoinput from "./compoment/Todoinput";
import Todoitems from "./compoment/Todoitems";
import "./App.css";
import { useState } from "react";
function App() {
  // const item = [
  //   {
  //     food: "Buy Milk",
  //     da: "27/3/2020",
  //   },
  //   {
  //     food: "buy salad",
  //     da: "27/4/2020",
  //   },
  //   {
  //     food: "buy ghee",
  //     da: "27/5/2020",
  //   }
  // ];

  let [item,foodchange]=useState( [
    {
      food: "Buy Milk",
      da: "27/3/2020",
    },
    {
      food: "buy salad",
      da: "27/4/2020",
    }
  ])

  let state=useState();
  let texttoshow=state[0];//value
  let texttochange=state[1];//method

  let [newi,changenew]=useState(['hyy']);

  function keydown(e)
  {
    if(e.key==="Enter")
    {
      let updateitem=e.target.value;
      let newItem=[...newi,updateitem];
      changenew(newItem);

      // texttochange(e.target.value);
    }
  }
  return (
    <div>
      <center className="todo-container">
        <TodoName />
        <div className="item">
          <Todoinput keydownevent={keydown}></Todoinput>
          <p style={{marginLeft:'40%'}}>{texttoshow}</p>
          <Todoitems items={item} diff={newi}></Todoitems>
        </div>
      </center>
    </div>
  );
}

export default App;
