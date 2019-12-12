import React, { useEffect } from "react";

function Frame(props) {
    /*
        wraps a Picture component
        props: [Picure]
    */    

    useEffect(() => {
        console.log("Frame mounted.")
    }, []);
    return <div className="Frame" onClick={() => console.log("Frame says : 'why you click me?'")}>{props.Picture}</div>
  }
  
export default Frame;
