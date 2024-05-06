import { createContext } from "react";
import { useReducer } from "react";

export const Itemcontext=createContext([]);

const todoitemReducer = (currtodoitem, action) => {
    let newtodoitem = currtodoitem;
    if (action.type === "ADD_ITEM") {
      newtodoitem = [
        ...currtodoitem,
        { food: action.payload.additem, da: action.payload.additemdate },
      ];
    }
    else if(action.type==="Delete_ITEM")
    {
      newtodoitem = currtodoitem.filter((value) => value.food !== action.payload.deleteitems)
    }
    return newtodoitem;
  };
const TodoitemContext=({children})=>
{
  const [item, dispatchtodo] = useReducer(todoitemReducer, []);

  const AddnewItem = (additem, additemdate) => {
    // const newitems=[...item,{food:additem,da:additemdate}];
    // foodchange((curritem)=>{
    //   console.log(curritem);
    //   const newit=[...curritem,{food:additem,da:additemdate}];
    //   return newit;
    // });
    const newitemaction = {
      type: "ADD_ITEM",
      payload: {
        additem,
        additemdate,
      },
    };
    dispatchtodo(newitemaction);
  };
  const DeleteItem = (deleteitem) => {
    // const newupdateitem = item.filter((value) => value.food !== deleteitem);
    // foodchange(newupdateitem);
    const deletetodo = {
      type: "Delete_ITEM",
      payload: {
        deleteitems: deleteitem,
      },
    };
    dispatchtodo(deletetodo);
  };
  return <Itemcontext.Provider 
  value={
    { item, AddnewItem, DeleteItem }
    }>
        {children}
  </Itemcontext.Provider>

}
export default TodoitemContext;