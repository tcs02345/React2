import React from "react";
import { Consumer } from "./Context";

 export default function C1(){
    return(
        <>
        <h1>this is h1 </h1>
        <hr></hr>
        <Consumer>
            {
                (value) =>{
                    return(
                        <>
                        <h1>{value.name}</h1>
                        
                        </>
                    )
                }
            }
        </Consumer>
        </>
    )
}
