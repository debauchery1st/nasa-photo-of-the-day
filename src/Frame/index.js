import React, { useEffect } from "react";
import { metaProperty } from "@babel/types";

function Frame(props) {
    /*
        wraps a Picture component
        props: [Picure]
    */    

    useEffect(() => {
        console.log("Frame mounted.")
    }, []);
    return <div className="FrameColumn">
        <h1 className="title">{props.title}</h1>
        <div className="FrameRow">{props.prevButton}{props.Picture}{props.nextButton}</div>
        <p className="description">{props.desc}</p>
        </div>
  }
  
export default Frame;
