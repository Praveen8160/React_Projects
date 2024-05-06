import Item from "./Item"
function condition({food})
{
    // let arr=[]

    // ****using if condition********
    // if(arr.length===0)
    // {
    //     return <p>list is empty</p>
    // }

    // ********ternary operator******
    // let checkempty=arr.length===0?<p>empty</p>:null; 
    return<>

        {/* {checkempty} */}
        
        {food.length===0 && <p>empty</p>}
        {food.map(item=><Item key={item} items={item}/>)}
    </>

}
export default condition