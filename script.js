// Dark Mode and Light Mode Toggle
const modeToggleButton = document.getElementById('mode-toggle');
const body = document.body;

modeToggleButton.addEventListener('click', () => {
    // Toggle the dark-mode class on body and other elements
    body.classList.toggle('dark-mode');
    
    // Update button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        modeToggleButton.textContent = 'Toggle Light Mode';
    } else {
        modeToggleButton.textContent = 'Toggle Dark Mode';
    }
});
