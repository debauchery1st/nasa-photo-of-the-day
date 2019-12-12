import React, { useEffect } from "react";

function Button(props) {
    /*
        Button component
        props: [label, callback, alt]
    */    
    useEffect(() => {
        console.log("Button mounted.")
    }, []);
    return <div className="Button" onClick={() => props.callback()}>{props.label}</div>
  }
  
export default Button;
