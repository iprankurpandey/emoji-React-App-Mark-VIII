import React from "react";
import "./styles.css";

const emojiDictionary = {
  "😂": "Extreme Happiness",
  "🤣": "hysterical laughter",
  "😊": "neutral Happiness",
  "😍": "adoration",
  "❤️": "Red Heart"
};
export default function App() {
  function emojiInputHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];
    console.log(meaning);
  }
  return (
    <div className="App">
      <h1>inside out</h1>
      <input onChange={emojiInputHandler} />
    </div>
  );
}
