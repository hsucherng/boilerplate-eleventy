const pluginSass = require('eleventy-plugin-sass');

module.exports = function(eleventyConfig) {
  // Copy through
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/js/vendors");

  // Watch targets
  eleventyConfig.addWatchTarget("./src/assets/js");

  // Template filters
  eleventyConfig.addFilter("json", (value) => JSON.stringify(value));

  // Plugins
  eleventyConfig.addPlugin(pluginSass, {
    watch: [
      './src/assets/scss/**/*.scss'
    ],
    outputDir: './dist/assets/css/',
    cleanCSS: false
  });

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
