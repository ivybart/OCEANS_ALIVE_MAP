document.getElementById('hamburgerButton').addEventListener('click', function () {
    const sideNav = document.getElementById('sideNav');
    sideNav.classList.toggle('active'); // Toggles visibility
});

// Function to toggle the dropdown display when the button is clicked
function toggleDropdown() {
    const dropdownContent = document.getElementById("toggleDropdownContent");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

// Close the dropdown only if clicking outside the button and dropdown content
window.onclick = function(event) {
    const dropdownContent = document.getElementById("toggleDropdownContent");
    const dropdownButton = document.querySelector('.dropbtn');
    
    // Check if the click is outside the dropdown button and the dropdown content
    if (dropdownContent.style.display === "block" && 
        !dropdownButton.contains(event.target) && 
        !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = "none";
    }
};


