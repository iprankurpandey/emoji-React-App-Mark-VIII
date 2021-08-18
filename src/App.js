import React, { useState } from "react";

import "./styles.css";

const emojiDictionary = {
  "😂": "Extreme Happiness",
  "🤣": "hysterical laughter",
  "😊": "neutral Happiness",
  "😍": "adoration",
  "❤️": "Red Heart"
};
let emojisWeKnow = Object.keys(emojiDictionary);

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
  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside out</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
