import { useContext } from "react";
import style from "./printtodo.module.css";
import { MdDelete } from "react-icons/md";
import { Itemcontext } from "../store/Todoitem_context";
function Printtodo(props) {
    const {DeleteItem}=useContext(Itemcontext)
    return (<>
      <div className="container">
        <div className="row item-row">
          <div className="col-6">{props.item}</div>
          <div className="col-4">{props.dates}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger" onClick={()=>DeleteItem(props.item)}>
            <MdDelete />
            </button>
          </div>
        </div>
        </div> 
        </> );
  }
  export default Printtodo