import React, { useState } from "react";

import "./styles.css";

const emojiDictionary = {
  "😂": "Extreme Happiness",
  "🤣": "hysterical laughter",
  "😊": "neutral Happiness",
  "😍": "adoration",
  "❤️": "Red Heart"
};
export default function App() {
  const [meaning, setMeaning] = useState(" ");
  function emojiInputHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "this is not in db";
    } else {
      console.log();
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside out</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
    </div>
  );
}
