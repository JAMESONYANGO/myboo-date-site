function saveLocation() {
    const location = document.getElementById('location').value;
    localStorage.setItem('location', location);
}

function saveActivity() {
    const activity = document.getElementById('activity').value;
    localStorage.setItem('activity', activity);
}

function saveFood() {
    const food = document.getElementById('food').value;
    localStorage.setItem('food', food);
}
