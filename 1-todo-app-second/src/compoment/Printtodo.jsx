import style from "./printtodo.module.css";
import { MdDelete } from "react-icons/md";
function Printtodo(props) {
    return (<>
      <div className="container">
        <div className="row item-row">
          <div className="col-6">{props.item}</div>
          <div className="col-4">{props.dates}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger" onClick={()=>props.ondeletebuttonclick(props.item)}>
            <MdDelete />
            </button>
          </div>
        </div>
        </div> 
        </> );
  }
  export default Printtodo