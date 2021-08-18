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
    console.log(event.target.value);
  }

  return (
    <div className="App">
      <h1>inside out</h1>
      <input onChnage={emojiInputHandler} />
    </div>
  );
}
