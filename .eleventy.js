import eleventyRssPlugin from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyRssPlugin, {
    posthtmlRenderOptions: {},
    outputPath: "/feed.xml",
    base: "https://rosenqvist.design/",
    metadata: {
      language: "en",
      title: "Rosenqvist Design",
      description: "Simon Rosenqvist's personal blog and portfolio",
      author: {
        name: "Simon Rosenqvist",
        email: "", // Optional
      },
      feed_url: "https://rosenqvist.design/feed.xml", // Absolute url to the feed
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

  // Copy the js directory to the output
  eleventyConfig.addPassthroughCopy({
    "src/js": "js",
  });

  // Add this line: Explicitly copy portfolio.html without processing
  eleventyConfig.addPassthroughCopy("src/portfolio.html");
  eleventyConfig.addPassthroughCopy("./cases/siic.html");
  eleventyConfig.addPassthroughCopy("./cases/volvo.html");
  eleventyConfig.addPassthroughCopy("src/jigs-tools/angularsizetool.html");

  // Add passthrough copy for blog post images - COMMENTED OUT
  // eleventyConfig.addPassthroughCopy("src/blog/**/*.+(jpg|jpeg|png|gif|svg|webp)");

  // Add absoluteUrl filter
  // eleventyConfig.addFilter("absoluteUrl", function (url) {
  //   return `https://rosenqvist.design${url}`;
  // });

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
}
