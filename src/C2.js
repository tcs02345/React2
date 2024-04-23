import React from "react";

import { Consumer } from "./Context";

export default function C2(){
    return(
        <div>
            <Consumer>
                {
                    (store)=>{
                        return(
                            <h4>{store.name}</h4>
                        )
                    }
                }
            </Consumer>
            

        </div>
    )
}