document.addEventListener("DOMContentLoaded", () => {
    const guessInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessButton");
    const feedback = document.getElementById("feedback");
    const chancesDisplay = document.getElementById("chances");

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let chances = 3;

    guessButton.addEventListener("click", () => {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = "Please enter a valid number between 1 and 100.";
            return;
        }

        chances--;

        if (userGuess === randomNumber) {
            feedback.textContent = "Congratulations! You guessed the correct number!";
            guessButton.disabled = true;
        } else if (chances === 0) {
            feedback.textContent = `Game over! The correct number was ${randomNumber}.`;
            guessButton.disabled = true;
        } else {
            feedback.textContent = userGuess > randomNumber ? "Too high!" : "Too low!";
        }

        chancesDisplay.textContent = `Chances left: ${chances}`;
    });
});
