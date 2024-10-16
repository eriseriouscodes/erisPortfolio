let y = Math.floor(Math.random() * 10 + 1);
let guess = 1;

document.getElementById("submitguess").onclick = function () {
    let x = parseInt(document.getElementById("guessField").value);
    let feedback = document.getElementById("feedback");

    if (isNaN(x)) {
        feedback.textContent = "Please enter a valid number.";
        feedback.classList.replace("text-success", "text-danger"); // Ensure it's red if it's invalid input
    } else if (x === y) {
        feedback.textContent = "CONGRATULATIONS!!! You guessed it right in " + guess + " guess!";
        feedback.classList.replace("text-danger", "text-success"); // Green text for success
    } else if (x > y) {
        guess++;
        feedback.textContent = "WRONG! Try a smaller number.";
        feedback.classList.replace("text-success", "text-danger"); // Red text for wrong guesses
    } else {
        guess++;
        feedback.textContent = "WRONG! Try a bigger number.";
        feedback.classList.replace("text-success", "text-danger"); // Red text for wrong guesses
    }
}

// Add event listener for the "Restart Game" button
document.getElementById("restartGame").onclick = function () {
    // Reload the entire page to restart the game
    location.reload();
}
