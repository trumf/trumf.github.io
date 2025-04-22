module.exports = function (eleventyConfig) {
  // Copy the css directory to the output
  eleventyConfig.addPassthroughCopy({
    "src/css": "css",
  });

  // Copy the public directory to the output
  eleventyConfig.addPassthroughCopy({
    "src/public": ".",
  });

  // Copy the components directory to the output
  eleventyConfig.addPassthroughCopy({
    "src/components": "components",
  });

  // Add passthrough copy for blog post images - COMMENTED OUT
  // eleventyConfig.addPassthroughCopy("src/blog/**/*.+(jpg|jpeg|png|gif|svg|webp)");

  // Add absoluteUrl filter
  eleventyConfig.addFilter("absoluteUrl", function (url) {
    return `https://rosenqvist.design${url}`;
  });

  // Add dateToISO filter
  eleventyConfig.addFilter("dateToISO", function (date) {
    return new Date(date).toISOString().split("T")[0];
  });

  // Configure collections
  eleventyConfig.addCollection("post", function (collectionApi) {
    // Updated to find index.md files within post folders
    return collectionApi.getFilteredByGlob("src/blog/**/index.md");
  });

  // Set custom directories for input, output, includes, and data
  return {
    // Add templateFormats and passthroughFileCopy to handle co-located assets
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid", // Assuming default formats - adjust if needed
      "jpg",
      "jpeg",
      "png",
      "gif",
      "svg",
      "webp",
    ],
    passthroughFileCopy: true,

    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
