// Get the sign-in modal element
var signinModal = document.getElementById("signin-modal");

// Get the sign-in button in the header
var signinButton = document.getElementById("signin-btn");

// Get the "Sign Up" link in the sign-in modal
var signupLink = document.getElementById("signup-link");

// Get the close button in the sign-in modal
var closeBtn = signinModal.getElementsByClassName("close")[0];

// Get the sign-in form fields
var signinUsername = document.getElementById("signin-username");
var signinPassword = document.getElementById("signin-password");

// Event listener to open the sign-in modal when the sign-in button is clicked
signinButton.addEventListener("click", openSignInModal);

// Event listener to open the sign-up modal when the "Sign Up" link is clicked
signupLink.addEventListener("click", function (event) {
    event.preventDefault();
    closeSignInModal();
    openModal();
});

// Function to open the sign-in modal
function openSignInModal() {
    signinModal.style.display = "block";
}

// Function to handle sign-in form submission
function handleSignIn(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve sign-in form field values
    var username = signinUsername.value;
    var password = signinPassword.value;

    // Perform sign-in form validation
    var validationMessages = [];

    if (username === "") {
        validationMessages.unshift({ field: "signin-username", message: "Please enter your username." });
    }
    if (password === "") {
        validationMessages.unshift({ field: "signin-password", message: "Please enter your password." });
    }

    // Display validation messages if any
    if (validationMessages.length > 0) {
        displayValidationMessages(validationMessages);
        return;
    }

    // Add your logic for sign-in validation and further processing here

    // Close the sign-in modal after successful sign-in or other logic
    closeSignInModal();
}

// Function to close the sign-in modal
function closeSignInModal() {
    signinModal.style.display = "none";
}

// Event listener to close the sign-in modal when the close button is clicked
closeBtn.addEventListener("click", closeSignInModal);

// Event listener to handle sign-in form submission when the "Sign In" button within the modal is clicked
document.getElementById("signin-modal").querySelector('.modal-content input[type="submit"]').addEventListener("click", handleSignIn);
