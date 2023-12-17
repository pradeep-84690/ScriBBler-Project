
    // JavaScript to handle modal functionality

    // Get the modal element
    var modal = document.getElementById("signup-modal");

    // Get the button that opens the modal
    var signupButton = document.getElementById("signup-btn");

    // Get the <span> element that closes the modal
    var closeBtn = document.getElementsByClassName("close")[0];

    // Function to open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Function to handle form submission
    function handleSignUp(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form field values
        var name = document.getElementById("name").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;

        // Perform mandatory field validation
        var validationMessages = [];

        if (name === "") {
            validationMessages.unshift({ field: "name", message: "Please fill out this field." });
        }
        if (username === "") {
            validationMessages.unshift({ field: "username", message: "Please fill out this field." });
        }
        if (password === "") {
            validationMessages.unshift({ field: "password", message: "Please fill out this field." });
        }
        if (confirmPassword === "") {
            validationMessages.unshift({ field: "confirm-password", message: "Please fill out this field." });
        }

        // Display validation messages if any
        if (validationMessages.length > 0) {
            displayValidationMessages(validationMessages);
            return;
        }

        // Add your logic for further form validation and signup process here
        // Example: Check for password strength, match passwords, send data to server

        // Close the modal after successful signup or other logic
        closeModal();
    }

    // Function to display validation messages for multiple fields
    function displayValidationMessages(messages) {
        messages.forEach(function (message) {
            var field = document.getElementById(message.field);
            field.setCustomValidity(message.message);
            field.addEventListener("input", function () {
                field.setCustomValidity("");
            });
            field.reportValidity();
        });
    }

    // Event listener to open the modal when the signup button is clicked
    signupButton.addEventListener("click", openModal);

    // Event listener to close the modal when the close button is clicked
    closeBtn.addEventListener("click", closeModal);

    // Event listener to handle form submission when the "Sign Up" button within the modal is clicked
    document.querySelector('.modal-content input[type="submit"]').addEventListener("click", handleSignUp);

