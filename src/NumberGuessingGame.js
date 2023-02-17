import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/* function that returns a random integer number from 1-100 inclusive */
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

let randomNum = getRandomNumber()


const MAX_ATTEMPTS = 5;


export default function NumberGuessingGame() {
    const [numberToGuess, setNumberToGuess] = useState(randomNum)
    const [numberOfGuesses, setNumberOfGuesses] = useState(0)
    const [latestGuess, setLatestGuess] = useState(null)
    const [isCorrectGuess, setIsCorrectGuess] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)

    const handleGuess = (guess) => {
        setNumberOfGuesses(numberOfGuesses + 1)
        setLatestGuess(guess)
        if(guess === numberToGuess) {
            setIsCorrectGuess(true)
            setIsGameOver(true)
        }
        if(numberOfGuesses === MAX_ATTEMPTS - 1) {
            setIsGameOver(true)
        }
    }

    const handleReset = () => {
        setNumberOfGuesses(0)
        setNumberToGuess(getRandomNumber())
        setLatestGuess(null)
        setIsCorrectGuess(false)
        setIsGameOver(false)
    }

    return (
        <div>
            <h2>I'm thinking of a number from 1 to 100.</h2>
            <h2>
                Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
            </h2>
            <GuessControl onGuess={handleGuess} />
            {isGameOver && (
                <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
            )}
            {!isGameOver && (
                <GuessMessage
                    guess={latestGuess}
                    numberToGuess={numberToGuess}
                    numberOfGuesses={numberOfGuesses}
                />
            )}
        </div>
    );
}
