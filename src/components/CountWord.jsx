import React, { useState } from "react";


function CountWord() {
  const [inputText, setInputText] = useState("");

  // đếm kí tự
  const countWords = () => {
    const words = inputText.trim().split(/\s+/);
    return words.length;
  };

  // đếm từ
  const countLetters = () => {
    const letters = inputText.replace(/\s+/g, "");
    return letters.length;
  };

  // đếm đoạn
  const countParagraphs = () => {
    const paragraphs = inputText.split(/\n/);
    return paragraphs.length;
  };

  // viết Hoa
  const handleUppercaseClick = () => {
    setInputText(inputText.toUpperCase());
  };

  // viết thường
  const handleLowercaseClick = () => {
    setInputText(inputText.toLowerCase());
  };

  return (
    <div className="containerText">
      <h2>Word Counter</h2>
      <div className="item">
        <p className="itemWord">
          Words:
          <br />
          {countWords()}
        </p>
        <p className="itemWord">
          Letters:
          <br />
          {countLetters()}
        </p>
        <p className="itemWord">
          Paragraphs:
          <br />
          {countParagraphs()}
        </p>
      </div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your text here"
      />
      <br />
      <div className="btn">
        <button onClick={handleUppercaseClick}>Click to Uppercase</button>
        <button onClick={handleLowercaseClick}>Click to Lowercase</button>
      </div>
    </div>
  );
}

export default CountWord;
