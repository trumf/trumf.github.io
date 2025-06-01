document.addEventListener("DOMContentLoaded", () => {
  // Create the modal element once and append it to the body
  const modal = document.createElement("div");
  modal.id = "image-fullscreen-modal";
  const modalImage = document.createElement("img");
  modal.appendChild(modalImage);
  document.body.appendChild(modal);

  // Function to open the modal
  function openModal(src) {
    modalImage.src = src;
    modal.style.display = "flex"; // Use flex to utilize justify-content and align-items
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
    modalImage.src = ""; // Clear the image source
    document.body.style.overflow = ""; // Restore background scrolling
  }

  // Add click listener to images that should be zoomable
  // This targets images within typical content containers or images with a specific class.
  // Adjust the selector as needed for your site structure.
  const images = document.querySelectorAll(
    "article img, .zoomable-image, .content img, main img"
  );
  images.forEach((img) => {
    // Check if the image is already wrapped in a link, if so, don't add the modal behavior
    // to avoid conflict with existing links on images.
    if (!img.closest("a")) {
      img.style.cursor = "zoom-in"; // Add zoom-in cursor to images
      img.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent click from bubbling to the modal if image is inside it somehow
        openModal(img.src);
      });
    }
  });

  // Close the modal when the modal background is clicked
  modal.addEventListener("click", (event) => {
    // Only close if the click is on the modal background itself, not the image
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close the modal with the Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
});
