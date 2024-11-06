// script.js

// Function to handle selections for destination, food, and activity
function chooseOption(option, elementId) {
    document.getElementById(elementId).textContent = option;

    // Update summary
    if (elementId === 'destination-choice') {
        document.getElementById('summary-destination').textContent = option;
    } else if (elementId === 'food-choice') {
        document.getElementById('summary-food').textContent = option;
    } else if (elementId === 'activity-choice') {
        document.getElementById('summary-activity').textContent = option;
    }
}

// Function to confirm choices
function confirmChoices() {
    const destination = document.getElementById('summary-destination').textContent;
    const food = document.getElementById('summary-food').textContent;
    const activity = document.getElementById('summary-activity').textContent;

    if (destination !== 'Not selected' && food !== 'Not selected' && activity !== 'Not selected') {
        alert(`Your choices are set! We'll go to the ${destination}, enjoy some ${food}, and have fun with ${activity}. Looking forward to it!`);
    } else {
        alert('Please make sure all options are selected.');
    }
}
