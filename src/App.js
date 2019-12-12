import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { NASA_API_KEY } from "./myconfig";

import Picture from "./Picture"
import Frame from "./Frame";

function App() {
  const [meta, setMeta] = useState({}); // result of API call
  const photoOfDay = 'apod'; // remote procedure call
  const nasaPhotoOfDay = `https://api.nasa.gov/planetary/${photoOfDay}?api_key=${NASA_API_KEY}`; // templated API url
  useEffect(() => {
    // 1 request
    console.log("requesting info from NASA");
    const apod = new axios.get(nasaPhotoOfDay).then((result) => {
      const apiData = result.data; // reference (selector)
      setMeta(apiData); // store the payload
    });
  }, []);
  // refer to the meta from 
  return (
    <div className="App">
      <Frame Picture={<Picture key="photo" src={meta.url} alt={meta.title} hdsrc={meta.hdurl} />}></Frame>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
    </div>
  );
}

export default App;
