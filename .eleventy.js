const eleventySass = require('eleventy-sass');
const prettier = require('prettier');
const shouldUsePrettier = process.argv.includes('--prettier');

module.exports = function(eleventyConfig) {
  // Copy through
  eleventyConfig.addPassthroughCopy("./src/assets/!(js|scss)/**");
  eleventyConfig.addPassthroughCopy("./src/assets/js/vendors");

  // Watch targets
  eleventyConfig.addWatchTarget("./src/assets/**");

  // Template filters
  eleventyConfig.addFilter("json", (value) => JSON.stringify(value));

  // Plugins
  eleventyConfig.addPlugin(eleventySass, {
    compileOptions: {
      permalink: function() {
        return (data) => data.page.filePathStem.replace(/^\/scss\//, "/css/") + ".css";
      }
    },
  });

  if(shouldUsePrettier) {
    eleventyConfig.addTransform("html-prettier", function(content, outputPath) {
      if(outputPath && outputPath.endsWith(".html")) {
        return prettier.format(content, { parser: 'html' });
      }

      return content;
    });
  }

  // Globals
  return {
    dir: {
      includes: '_includes',
      input: 'src',
      layouts: '_layouts',
      output: 'dist',
    }
  };
};
