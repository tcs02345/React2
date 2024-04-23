import React, {useContext} from "react";
import { Consumer } from "./Context";

export default function C4(){
    const  data = useContext(Consumer)
    return(
        <div>
            <h2>hhfuh:{data.name}</h2>
        </div>
    )
}
