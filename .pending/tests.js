function testResponsiveLayout() {
  const breakpoints = [320, 480, 768, 1024, 1440];
  const elementsToTest = [
    "header.heroSection",
    ".hero-text",
    ".post-container",
    ".postCard",
    "footer",
  ];

  breakpoints.forEach((width) => {
    console.log(`Testing at ${width}px width`);
    window.innerWidth = width;
    window.dispatchEvent(new Event("resize"));

    elementsToTest.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        console.log(`${selector}:`);
        console.log(`  Width: ${computedStyle.width}`);
        console.log(`  Padding: ${computedStyle.padding}`);
        console.log(`  Font size: ${computedStyle.fontSize}`);

        // Add specific checks based on your design requirements
        if (width <= 768 && selector === ".post-container") {
          const cards = document.querySelectorAll(".postCard");
          console.log(
            `  Number of cards per row: ${Math.floor(
              parseInt(computedStyle.width) / cards[0].offsetWidth
            )}`
          );
        }
      } else {
        console.warn(`Element not found: ${selector}`);
      }
    });
    console.log("---");
  });
}

// Run the test when the page is loaded
window.addEventListener("load", testResponsiveLayout);
