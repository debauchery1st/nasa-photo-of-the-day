import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { NASA_API_KEY } from "./myconfig";

import Card from "./Card";

function App() {
  const [meta, setMeta] = useState({}); // result of API call
  const photoOfDay = 'apod'; // remote procedure call
  const nasaPhotoOfDay = `https://api.nasa.gov/planetary/${photoOfDay}?api_key=${NASA_API_KEY}`; // templated API url
  useEffect((f=setMeta, apiUrl=nasaPhotoOfDay) => {
    // 1 request
    console.log("requesting info from NASA");
    new axios.get(apiUrl).then((result) => {
      const apiData = result.data; // reference (selector)
      f(apiData); // store the payload
    }).catch((error) => console.log);
  }, [nasaPhotoOfDay]);
  // refer to the meta from 
  return (
    <div className="App"><Card src={meta.url} title={meta.title} desc={meta.explanation} hdsrc={meta.hdsrc}/>
    </div>
  );
}

export default App;
