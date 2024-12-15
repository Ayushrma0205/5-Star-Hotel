// Dark Mode Toggle Functionality
const toggleThemeButton = document.getElementById("theme-toggle");
const bodyElement = document.body;

// Load the saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  bodyElement.classList.add(savedTheme);
}

// Event listener to toggle the theme
toggleThemeButton.addEventListener("click", () => {
  if (bodyElement.classList.contains("dark-mode")) {
    bodyElement.classList.remove("dark-mode");
    localStorage.setItem("theme", ""); // Save theme in localStorage
  } else {
    bodyElement.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode"); // Save theme in localStorage
  }
});

// Scroll-to-top button functionality
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
