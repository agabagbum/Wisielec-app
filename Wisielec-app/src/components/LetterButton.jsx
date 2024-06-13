import React from "react";

const LetterButton = ({ letter, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ margin: "5px", fontSize: "16px" }}
    >
      {letter}
    </button>
  );
};

export default LetterButton;
