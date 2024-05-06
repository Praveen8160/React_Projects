import Item from "./Item"
function Mapexample({student})
{
    return(<>
    {student.map((item)=>
    <Item key={item} items={item}/>)}
    </>)
}
export default Mapexample