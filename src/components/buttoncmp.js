import React from "react";
import "./buttoncmp.css";

var Buttoncmp=(props)=>{
    return(
        <div>
            <input type="button" value={props.children} className="buttonstyle" onClick={()=>props.handleclick(props.children)}></input>
        </div>
    );
}
export default Buttoncmp;