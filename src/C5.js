import React, {useContext} from "react";
import {dataContext} from "./Context";


export default function C5(){
    const  data = useContext(dataContext)
    return(
        <div>
            <h2>this is c5:{data.name}</h2>
        </div>
    )
}
