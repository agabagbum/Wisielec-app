import React, { useState, useEffect } from "react";
import Word from "./Word";
import LetterButton from "./LetterButton";
import words from "../words.json";

const Game = () => {
  const [selectedWord, setSelectedWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const maxIncorrectGuesses = 6;

  useEffect(() => {
    resetGame();
  }, []);

  const handleLetterClick = (letter) => {
    if (guessedLetters.includes(letter)) return;

    console.log(`Kliknięto literę: ${letter}`);
    console.log(`Wybrane słowo: ${selectedWord}`);
    console.log(
      `Czy wybrane słowo zawiera literę: ${selectedWord.includes(letter)}`
    );

    setGuessedLetters([...guessedLetters, letter]);

    if (!selectedWord.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  const resetGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setSelectedWord(randomWord);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
  };

  const isGameOver = incorrectGuesses >= maxIncorrectGuesses;
  const isWinner = selectedWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  return (
    <div>
      <h1>Wisielec</h1>
      <Word word={selectedWord} guessedLetters={guessedLetters} />
      <div>
        {isGameOver ? (
          <p>Przegrałeś! Słowo to: {selectedWord}</p>
        ) : isWinner ? (
          <p>Wygrałeś!</p>
        ) : (
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            .split("")
            .map((letter) => (
              <LetterButton
                key={letter}
                letter={letter}
                onClick={() => handleLetterClick(letter)}
                disabled={
                  guessedLetters.includes(letter) || isGameOver || isWinner
                }
              />
            ))
        )}
      </div>
      <p>
        Niepoprawne próby: {incorrectGuesses} / {maxIncorrectGuesses}
      </p>
      <button
        onClick={resetGame}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
      >
        Restartuj grę
      </button>
    </div>
  );
};

export default Game;
