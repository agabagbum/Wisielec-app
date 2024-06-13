import React from "react";

const Word = ({ word, guessedLetters }) => {
  return (
    <div>
      {word.split("").map((letter, index) => (
        <span key={index} style={{ marginRight: "5px", fontSize: "24px" }}>
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default Word;
