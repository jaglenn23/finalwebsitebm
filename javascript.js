document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Your-Story");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const typeofmsInput = document.getElementById("typeofms");
    const yeardiagInput = document.getElementById("yeardiag");
    const yourstoryInput= document.getElementById("yourstory")
    const yesInput= document.getElementById("yes");
    const noInput= document.getElementById('no');
    form.addEventListener("submit", function (event) {
    // Initialize an array to store error messages
    const errors = [];
    // Validation for username (can not be empty)
    if (nameInput.value.length <= 0) {
    errors.push("Please Enter Your Name!");
    }
    // Validation for email (must be a valid email format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
    errors.push("Please enter a valid email address!");
    }
    // Validation for type of ms ( can not be empty)
    if (typeofmsInput.value.length <= 0) {
    errors.push("Please enter type of MS!");
    }
    // Validation for year diagnosed( can not be empty)
    if (yeardiagInput.value <= 0) {
    errors.push("Please enter year diagnosed!");
    }
    // Validation for textbox
    if (yourstoryInput.value = 0){
        errors.push("Please Share Your Story!")
    }
    //vallidation for radio yes and no values
    if (yesInput.value && noInput.value == 0){
        errors.push("Please Select Yes or No!")
    }
    // If there are errors, prevent form submission and display them
    if (errors.length > 0) {
    event.preventDefault(); // Prevent form submission
    alert(errors.join("\n")); // Display error messages in an alert
    }
    });
    });