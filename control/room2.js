
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const unlockButton = document.getElementById("unlock");
    const hint = document.getElementById("hint");
    const successPopUp = document.getElementById("successPopUp");
    const failurePopUp = document.getElementById("failurePopUp");

    const correctPassword = "pumpkin"; 

    unlockButton.addEventListener("click", function () {
        const enteredPassword = passwordInput.value;
        if (enteredPassword === correctPassword) {
            successPopUp.style.display = "block";
            hint.style.display = "none";
        } else {
            failurePopUp.style.display = "block";
            hint.style.display = "none";
        }
    });
});
