import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

export default function App() {
  const [LikeCounter, setlikeCounter] = useState(0);
  function likeClickHandler() {
    var newLikeCounter = LikeCounter + 1;
    setlikeCounter(newLikeCounter); //confused
    //process to output the value on display
  }
  console.log("LikeCounter", LikeCounter);
  return (
    <div className="App">
      <h1>inside out</h1>
      <button onClick={likeClickHandler}>Like </button>
      {LikeCounter}
    </div>
  );
}
