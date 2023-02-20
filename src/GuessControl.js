import React, { useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
    const [currentGuess, setCurrentGuess] = useState("");

    const handleInputChange = (e) => {
        setCurrentGuess(e.target.value);
    };

    const onSubmitGuess = (e) => {
        e.preventDefault(); // prevent form submission
        onGuess(Number(currentGuess));
        setCurrentGuess("");
    };

    return (
        <form onSubmit={onSubmitGuess}>
            <label>
                Guess:
                <input
                    type="number"
                    value={currentGuess}
                    onChange={handleInputChange}
                />
            </label>
            <Button type="submit">Submit Guess</Button>
        </form>
    );
};

export default GuessControl;

