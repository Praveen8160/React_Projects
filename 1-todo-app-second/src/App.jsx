import TodoName from "./compoment/TodoName";
import Todoinput from "./compoment/Todoinput";
import Todoitems from "./compoment/Todoitems";
import "./App.css";
import { useState } from "react";
import Welcomemessage from "./compoment/Welcomemessage";
function App() {
  let [item,foodchange]=useState([]);
 
  const handleadditem=(additem,additemdate)=>
  {

    // const newitems=[...item,{food:additem,da:additemdate}];
    foodchange((curritem)=>{
      console.log(curritem);
      const newit=[...curritem,{food:additem,da:additemdate}];
      return newit;
    });

  }
  const handledeletebutton=(deleteitem)=>
  {
    const newupdateitem=item.filter((value)=>value.food!==deleteitem);
    foodchange(newupdateitem);
  }
  return (
    <div>
      <center className="todo-container">
        <TodoName />
        <div>
          <Todoinput onadditem={handleadditem}></Todoinput>
          {item.length==0 ? <Welcomemessage></Welcomemessage>:<Todoitems items={item} ondeleteclick={handledeletebutton}></Todoitems>}
          {/* <p style={{marginLeft:'40%'}}>{texttoshow}</p> */}
          {/* <Todoitems items={item}></Todoitems> */}
        </div>
      </center>
    </div>
  );
}

export default App;
