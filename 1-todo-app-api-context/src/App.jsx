import TodoName from "./compoment/TodoName";
import Todoinput from "./compoment/Todoinput";
import Todoitems from "./compoment/Todoitems";
import "./App.css";
import Welcomemessage from "./compoment/Welcomemessage";
import TodoitemContext from "./store/Todoitem_context";

function App() {
  return (
    <>
      <TodoitemContext>
        <center className="todo-container">
          <TodoName />
          <div>
            <Todoinput></Todoinput>
            <Welcomemessage></Welcomemessage>
            <Todoitems></Todoitems>
            {/* <p style={{marginLeft:'40%'}}>{texttoshow}</p> */}
            {/* <Todoitems items={item}></Todoitems> */}
          </div>
        </center>
      </TodoitemContext>
    </>
  );
}

export default App;
