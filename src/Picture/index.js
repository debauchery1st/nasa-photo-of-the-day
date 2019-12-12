import React, { useState, useEffect } from "react";

function Picture(props) {
    /*
        displays an image that toggles between normal and hd when clicked.
        props: [src, hdsrc, alt]
    */
    const [pic, setPic] = useState(props.src);    

    function toggleSource() {
        setPic(pic === props.src ? props.hdsrc:props.src);
    }

    useEffect(() => {
        console.log("props have changed; changing <Picture / > state.");
        setPic(props.src);
    }, [props.src]);
    
    return <img className="Picture" alt={props.alt} src={pic} onClick={() => toggleSource()}/>
  }
  
export default Picture;
