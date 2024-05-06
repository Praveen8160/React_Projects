import { useRef, useState } from "react";
import { MdAddBox } from "react-icons/md";

function Todoinput({onadditem}) {
  const itemname=useRef();
  const duedate=useRef();
  // const [itemname,changeitem]=useState("");
  // const [itemduedate,changedate]=useState("");
  // const handleitemname=(event)=>
  // {
  //   changeitem(event.target.value);
  // }
  // const handleitemdate=(event)=>
  // {
  //   changedate(event.target.value);
  // }
  const handlebuttonclick=(event)=>
  {
    event.preventDefault();
    onadditem(itemname.current.value,duedate.current.value);
    itemname.current.value="";
    duedate.current.value="";
  }
  return (
    <div className="container">
      <form className="row item-row" onSubmit={handlebuttonclick}>
        <div className="col-6">
          <input type="text" placeholder="enter here" ref={itemname}/>
          {/* value={itemname} onChange={handleitemname} */}
        </div>
        <div className="col-4">
          <input type="date" name="" id="" ref={duedate}/>
          {/* value={itemduedate} onChange={handleitemdate} */}
        </div>
        <div className="col-2">
          <button className="btn btn-success">
          <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}
export default Todoinput;
