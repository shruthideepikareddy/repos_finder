document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.querySelector("#name");
    const ageInput = document.querySelector("#age");
    const emailInput = document.querySelector("#mail");
    const pinInput = document.querySelector("#pincode");
    const phoneInput = document.querySelector("#contact");
    const passwordInputs = document.querySelectorAll(".password");
    function showError(input, message) {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains("error-message")) {
            errorElement = document.createElement("div");
            errorElement.classList.add("error-message");
            errorElement.style.color = "red";
            errorElement.style.fontSize = "12px";
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
        errorElement.textContent = message;
    }
    function clearError(input) {
        let errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains("error-message")) {
            errorElement.textContent = "";
        }
    }
    form.addEventListener("submit", function (event) {
        let isValid = true;
        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(nameInput.value.trim())) {
            isValid = false;
            showError(nameInput, "Name should contain only alphabets and spaces.");
        } else {
            clearError(nameInput);
        }
        const age = parseInt(ageInput.value);
        if (isNaN(age) || age < 18 || age > 60) {
            isValid = false;
            showError(ageInput, "Age should be an integer between 18 and 60.");
        } else {
            clearError(ageInput);
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|in|co|us|info)$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            isValid = false;
            showError(emailInput, "Invalid email. Use format like example@gmail.com.");
        } else {
            clearError(emailInput);
        }
        const pinPattern = /^[0-9]{6}$/;
        if (!pinPattern.test(pinInput.value.trim())) {
            isValid = false;
            showError(pinInput, "PIN code should be exactly 6 digits.");
        } else {
            clearError(pinInput);
        }
        const phonePattern = /^[6-9][0-9]{9}$/;
        if (!phonePattern.test(phoneInput.value.trim())) {
            isValid = false;
            showError(phoneInput, "Phone number must be 10 digits and start with 6, 7, 8, or 9.");
        } else {
            clearError(phoneInput);
        }
        const password = passwordInputs[0].value;
        const confirmPassword = passwordInputs[1].value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordPattern.test(password)) {
            isValid = false;
            showError(passwordInputs[0], "Password must have 8+ characters, 1 uppercase, 1 lowercase, 1 digit, and 1 special character.");
        } else {
            clearError(passwordInputs[0]);
        }
        if (password !== confirmPassword) {
            isValid = false;
            showError(passwordInputs[1], "Passwords do not match.");
        } else {
            clearError(passwordInputs[1]);
        }
        if (!isValid) {
            event.preventDefault();
        }
    });
});