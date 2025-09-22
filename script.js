// Define a variable to store the user's name
let userName = "Lizzie";

// Log messages to the browser console (for testing/debugging)
console.log("Hello " + userName + ", welcome to the JavaScript course!");

// Get the input field element from the HTML page using its ID
const nameInput = document.getElementById('nameInput');

// Get the button element from the HTML page using its ID
const welcomeButton = document.getElementById('welcomeButton');

// Get the paragraph element where we'll display the welcome message
const welcomeMessage = document.getElementById('welcomeMessage');

// Add an event listener to the button that listens for 'click' events
welcomeButton.addEventListener('click', function() {
    // Get the value that the user typed into the input field
    let enteredName = nameInput.value;
    
    // Check if the user entered a name (not empty)
    if (enteredName) {
        // Create a fun personalized message using the entered name
        welcomeMessage.textContent = "🎉 Welcome to the amazing world of coding, " + enteredName + "! You're going to do great things! 🚀";
        
        // Clear the input field after showing the message
        nameInput.value = "";
    } else {
        // If no name was entered, show a friendly reminder
        welcomeMessage.textContent = "Please enter your name first! 😊";
    }
});