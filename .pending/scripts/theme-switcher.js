document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const currentThemeSpan = document.getElementById("current-theme");

  // Function to set the theme
  function setTheme(theme) {
    if (theme === "light") {
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
    }
    localStorage.setItem("theme", theme);
    updateThemeDisplay();
  }

  // Function to get the current theme
  function getTheme() {
    return localStorage.getItem("theme") || "system";
  }

  // Function to apply the theme
  function applyTheme() {
    const savedTheme = getTheme();
    if (savedTheme === "system") {
      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    } else {
      setTheme(savedTheme);
    }
  }

  // Function to update the theme display
  function updateThemeDisplay() {
    const currentTheme = getTheme();
    currentThemeSpan.textContent =
      currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);
  }

  // Listen for toggle button clicks
  themeToggle.addEventListener("click", () => {
    const currentTheme = getTheme();
    if (currentTheme === "light") {
      setTheme("dark");
    } else if (currentTheme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
    applyTheme();
  });

  // Listen for system preference changes
  window.matchMedia("(prefers-color-scheme: light)").addListener(() => {
    if (getTheme() === "system") {
      applyTheme();
    }
  });

  // Apply the theme on page load
  applyTheme();
  updateThemeDisplay();
});
