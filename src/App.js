import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [LikeCounter, setlikeCounter] = useState(0);
  function likeClickHandler() {
    var newLikeCounter = LikeCounter + 1;
    setlikeCounter(newLikeCounter); //confused
    console.log("LikeCounter", LikeCounter); //process to output the value on display
  }

  return (
    <div className="App">
      <h1>inside out</h1>
      <button onClick={likeClickHandler}>Like </button>
      {LikeCounter}
    </div>
  );
}
