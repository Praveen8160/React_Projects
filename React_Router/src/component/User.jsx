import React from "react";
import { useParams } from "react-router-dom"
export const User=()=>{
    let {userid}=useParams();
    return(
        <div>User id is:{userid}</div>
    )
}