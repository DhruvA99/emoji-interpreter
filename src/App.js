import React, { useState } from "react";
import "./styles.css";

// const name = prompt("Give your name");

const emojiDictionary = {
  "😀": "grinning face",
  "😂": "face with tears of joy",
  "❤️": "Love",
  "🔥": "Hot",
  "❄️": "SnowFlake"
};
const emojiArray = ["😀", "😂", "❤️", "🔥", "❄️"];

export default function App() {
  const [displayText, setDisplayText] = useState("");
  const [inputText, setInputText] = useState("");
  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
    if (e.target.value in emojiDictionary) {
      setDisplayText(emojiDictionary[e.target.value]);
    } else {
      if (e.target.value === "") {
        setDisplayText("");
      } else {
        setDisplayText("Emoji is not defined in our database");
      }
    }
  };
  const emojiClickHandler = (item) => {
    setDisplayText(emojiDictionary[item]);
  };
  return (
    <div className="App">
      <h1 className="welcome-text">Welcome </h1>
      <input
        className="input-first"
        type="text"
        value={inputText}
        placeholder="Enter the emoji here to see the meaning"
        onChange={(e) => inputChangeHandler(e)}
      />
      <h2>{displayText}</h2>
      {emojiArray.map((item) => (
        <div
          key={item}
          className="emoji-list"
          onClick={() => emojiClickHandler(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
