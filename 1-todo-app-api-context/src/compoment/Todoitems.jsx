import { useState } from "react"
import Printtodo from "./Printtodo"
import { useContext } from "react"
import { Itemcontext } from "../store/Todoitem_context"
function Todoitems()
{
    // let [activeitems,setactiveitems]=useState([]);
    // const changecolor=(item,event)=>
    // {
    //     let newitem=[...activeitems,item];
    //     setactiveitems(newitem);
    // }
    const {item}=useContext(Itemcontext);
    return(<>
        {item.map((go)=>(<Printtodo key={go.food} item={go.food} dates={go.da}></Printtodo>))}
    </>
    )
}
export default Todoitems