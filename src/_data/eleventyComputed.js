module.exports = {
  rootPath: (data) => {
    return data.page.url
      .split('/')
      .reduce((a, b) => a+(b && '../'),)
  },

  /*
   * Globally adjust the permalink so that it does not output
   * files as folder index HTMLs.
   *
   * https://github.com/11ty/eleventy/issues/1199
   */
  permalink: (data) => data.page.filePathStem + '.html'
};
