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
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
