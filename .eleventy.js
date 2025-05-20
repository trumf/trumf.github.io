const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss, {
    type: "rss",
    outputPath: "/rss.xml",
    collection: {
      name: "post", // make sure this matches your collection name
      limit: 0, // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "rosenqvist.design",
      subtitle:
        "UX design, Product Management, web design, and automotive research",
      base: "https://rosenqvist.design/",
      author: {
        name: "Simon Rosenqvist",
        email: "", // Optional
      },
    },
  });

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

  // Add this line: Explicitly copy portfolio.html without processing
  eleventyConfig.addPassthroughCopy("src/portfolio.html");
  eleventyConfig.addPassthroughCopy("./cases/siic.html");
  eleventyConfig.addPassthroughCopy("./cases/volvo.html");

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
