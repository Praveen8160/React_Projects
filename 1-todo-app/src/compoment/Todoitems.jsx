import { useState } from "react"
import Printtodo from "./Printtodo"
function Todoitems({items,diff})
{
    let [activeitems,setactiveitems]=useState([]);
    const changecolor=(item,event)=>
    {
        let newitem=[...activeitems,item];
        setactiveitems(newitem);
    }
    
    return(<>
        {items.map((go)=>(<Printtodo newi={diff} item={go.food} dates={go.da} brought={activeitems.includes(go.food)} handlebuyButton={(event)=>changecolor(go.food,event)}></Printtodo>))}
    </>
    )
}
export default Todoitems