/**
 * Main JavaScript file for rosenqvist.design
 * Contains utility functions and common scripts
 */

document.addEventListener("DOMContentLoaded", function () {
  // Initialize any scripts when DOM is fully loaded
  console.log("Website initialized");

  // Example utility functions

  /**
   * Smoothly scrolls to an element on the page
   * @param {string} elementId - The ID of the element to scroll to
   */
  window.smoothScroll = function (elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /**
   * Toggles a mobile navigation menu
   */
  window.toggleMobileNav = function () {
    const navbarNav = document.querySelector(".navbar-nav");
    if (navbarNav) {
      navbarNav.classList.toggle("show");
    }
  };
});
