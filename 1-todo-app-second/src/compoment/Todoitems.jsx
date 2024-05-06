import { useState } from "react"
import Printtodo from "./Printtodo"
function Todoitems({items,ondeleteclick})
{
    // let [activeitems,setactiveitems]=useState([]);
    // const changecolor=(item,event)=>
    // {
    //     let newitem=[...activeitems,item];
    //     setactiveitems(newitem);
    // }
    
    return(<>
        {items.map((go)=>(<Printtodo key={go.food} item={go.food} dates={go.da} ondeletebuttonclick={ondeleteclick}></Printtodo>))}
    </>
    )
}
export default Todoitems