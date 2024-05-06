import { useContext } from "react"
import { Itemcontext } from "../store/Todoitem_context"
const Welcomemessage = () => {
  const {item}=useContext(Itemcontext);
  return item.length === 0 && <p>enjoy your day</p>;
};
export default Welcomemessage;
