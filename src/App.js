import React, { useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Info from './Components/info.js'
import Picture from './Components/picture.js'


function App() {

  const[info, setInfo] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=3eA5AppCfebxoZBfXtJAv9wQuFxTVovdrlrRjMEt')
    .then(res => {
      setInfo(res.data)
    })
    .catch(err => {
      debugger
    })
  }, [])

  return (
    <div className="App">
      <h1>{info.title}</h1>
      <Picture source={info.url}/>
      <Info copyright={info.copyright} date={info.date} text={info.explanation}/>
    </div>
  );
}

export default App;
